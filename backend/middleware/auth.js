import { jwtVerify, createRemoteJWKSet } from 'jose'

const KEYCLOAK_URL = process.env.KEYCLOAK_URL || 'http://localhost:8080'
const REALM = process.env.KEYCLOAK_REALM || 'bookstore-realm'

console.log(`[AUTH] Initializing with Keycloak URL: ${KEYCLOAK_URL}, Realm: ${REALM}`)

const jwksURL = new URL(`${KEYCLOAK_URL}/realms/${REALM}/protocol/openid-connect/certs`)
const JWKS = createRemoteJWKSet(jwksURL)

export const requireAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      console.log('[AUTH] Missing or invalid Authorization header')
      return res.status(401).json({ message: 'Missing or invalid Authorization header' })
    }

    const token = authHeader.slice(7)

    try {
      // First verify the signature without issuer check (since issuer URL can vary - localhost vs keycloak)
      const { payload } = await jwtVerify(token, JWKS)

      // Manually verify the issuer contains our realm
      const expectedRealmIssuer = `/realms/${REALM}`
      if (!payload.iss || !payload.iss.includes(expectedRealmIssuer)) {
        throw new Error(`Invalid issuer: expected realm ${REALM}, got ${payload.iss}`)
      }

      console.log('[AUTH] Token verified for user:', payload.sub, 'from issuer:', payload.iss)
      req.user = payload
      next()
    } catch (error) {
      console.error('[AUTH] JWT verification failed:', error.message)
      return res.status(401).json({ message: 'Invalid token: ' + error.message })
    }
  } catch (error) {
    console.error('[AUTH] Auth middleware error:', error.message)
    return res.status(500).json({ message: 'Authentication error' })
  }
}

export const requireRole = (requiredRole) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Not authenticated' })
    }

    const userRoles = req.user.realm_access?.roles || []
    console.log(`[ROLE] Required: ${requiredRole}, User roles: ${JSON.stringify(userRoles)}`)
    
    if (!userRoles.includes(requiredRole)) {
      return res.status(403).json({ message: 'Insufficient permissions' })
    }

    next()
  }
}
