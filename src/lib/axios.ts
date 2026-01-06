import axios from 'axios'
import { env } from '../env'
import camelcaseKeys from 'camelcase-keys'

export const api = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: false
})

api.interceptors.response.use(
  function (response) {
    return {
      ...response,
      data: camelcaseKeys(response.data, { deep: true })
    }
  }
)

if (env.VITE_ENABLE_API_DELAY) {
  api.interceptors.request.use(async (config) => {
    await new Promise(resolve => setTimeout(resolve, Math.random() * 3000))

    return config
  })
}
