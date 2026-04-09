import { useKeycloak } from './useKeycloak'

export const useAxiosToken = () => {
  const { token } = useKeycloak()
  return token
}
