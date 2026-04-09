import { Navigate } from 'react-router-dom'
import { useKeycloak } from '../hooks/useKeycloak'

export const ProtectedRoute = ({ children, requiredRole }) => {
  const { isInitialized, user, hasRole } = useKeycloak()

  if (!isInitialized) {
    return <div>Loading...</div>
  }

  if (!user) {
    return <Navigate to="/" replace />
  }

  if (requiredRole && !hasRole(requiredRole)) {
    return <Navigate to="/" replace />
  }

  return children
}
