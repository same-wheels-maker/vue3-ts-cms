import XRequest from '@/service/request'
import { BASE_URL, TIME_OUT } from '@/service/request/config'
import localCache from '@/utils/cache'

const xRequest = new XRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = localCache.getCache('token')
      if (config.headers && token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    }
  }
})

export default xRequest
