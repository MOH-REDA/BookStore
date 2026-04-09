import { createContext, useState, useEffect, useRef } from 'react'
import keycloak from '../config/keycloak'

export const KeycloakContext = createContext(null)

export const KeycloakProvider = ({ children }) => {
  const [isInitialized, setIsInitialized] = useState(false)
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const initRef = useRef(false)

  useEffect(() => {
    // Clear old conflicting localStorage keys from previous projects
    const keysToRemove = ['user', 'token', 'email', 'userId']
    keysToRemove.forEach(key => {
      if (localStorage.getItem(key)) {
        localStorage.removeItem(key)
      }
    })

    // Only initialize once
    if (initRef.current) return
    initRef.current = true

    const initKeycloak = async () => {
      try {
        const authenticated = await keycloak.init({
          onLoad: 'login-required',
          checkLoginIframe: false,
        })

        if (authenticated && keycloak.token) {
          console.log('[KEYCLOAK] User authenticated:', keycloak.tokenParsed?.preferred_username)
          console.log('[KEYCLOAK] Token:', keycloak.token.substring(0, 50) + '...')
          console.log('[KEYCLOAK] Roles:', keycloak.tokenParsed?.realm_access?.roles)
          
          setToken(keycloak.token)
          setUser({
            name: keycloak.tokenParsed?.name || keycloak.tokenParsed?.preferred_username,
            email: keycloak.tokenParsed?.email,
            roles: keycloak.tokenParsed?.realm_access?.roles || [],
          })

          // Setup token refresh
          keycloak.onTokenExpired = () => {
            console.log('[KEYCLOAK] Token expired, refreshing...')
            keycloak.updateToken(30).then((refreshed) => {
              if (refreshed) {
                console.log('[KEYCLOAK] Token refreshed')
                setToken(keycloak.token)
              } else {
                console.log('[KEYCLOAK] Token still valid')
              }
            }).catch((error) => {
              console.error('[KEYCLOAK] Token refresh failed:', error)
              keycloak.logout()
            })
          }
        } else {
          console.log('[KEYCLOAK] User not authenticated')
        }
      } catch (error) {
        console.error('[KEYCLOAK] Init error:', error)
      } finally {
        setIsInitialized(true)
      }
    }

    initKeycloak()
  }, [])

  const login = () => keycloak.login()
  const logout = () => keycloak.logout({ redirectUri: window.location.origin })
  const register = () => keycloak.register()

  const hasRole = (role) => {
    return user?.roles?.includes(role) || false
  }

  return (
    <KeycloakContext.Provider
      value={{
        isInitialized,
        user,
        token,
        login,
        logout,
        register,
        hasRole,
        keycloak,
      }}
    >
      {children}
    </KeycloakContext.Provider>
  )
}
