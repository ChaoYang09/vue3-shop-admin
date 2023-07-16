import { useCommonStore } from '@/store/common'
import axios, { AxiosRequestConfig } from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus'
import router from '@/router/index'
import pinia from '@/store/index'
const store = useCommonStore(pinia)
const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL,
})
request.interceptors.request.use(
  (config) => {
    if (store.user && store.user.token) {
      config.headers.Authorization = `Bearer ${store.user.token}`
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)
let isRefreshing = false
request.interceptors.response.use(
  (res) => {
    const { status } = res.data
    if (!status || status === 200) return res
    if (status === 410000) {
      if (isRefreshing) return Promise.reject(res)
      isRefreshing = true
      ElMessageBox.confirm('您的登录已过期，您可以取消停留在此页面，或确认重新登录', '登录过期', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
      })
        .then(() => {
          store.setUser(null)
          router.push({
            name: 'login',
            query: {
              redirect: router.currentRoute.value.fullPath,
            },
          })
        })
        .finally(() => {
          isRefreshing = false
        })
      return Promise.reject(res)
    }
    // 统一处理错误

    ElMessage.error(res.data.status.message || '请求失败，请稍后再试')
    return Promise.reject(res)
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default async <T = any>(config: AxiosRequestConfig) => {
  const res = await request(config)
  return (res.data.data || res.data) as T
}
