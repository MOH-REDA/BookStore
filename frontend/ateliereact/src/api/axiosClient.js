import axios from 'axios'
import keycloak from '../config/keycloak'

const baseURL = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:5000'
    : '/api'

const http = axios.create({
    baseURL: baseURL,
    headers:{'Content-Type':'application/JSON'}
})

// Add token to every request
http.interceptors.request.use((config) => {
    const token = keycloak.token
    
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
        console.log('[AXIOS] Token added:', token.substring(0, 30) + '...')
    } else {
        console.warn('[AXIOS] No token available')
    }
    return config
}, (error) => {
    console.error('[AXIOS] Request error:', error)
    return Promise.reject(error)
})

// Handle responses
http.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        const status = error.response?.status
        const url = error.config?.url
        const data = error.response?.data
        
        console.error(`[AXIOS] ${status} Error on ${url}:`, data)
        return Promise.reject(error)
    }
)

export default http