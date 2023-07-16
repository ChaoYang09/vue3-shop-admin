import request from '@/utils/request'

// interface responseData<T = any> {
//   status: 0
//   msg: string
//   data: T
// }
import { ILoginInfo, ILoginResponse } from './types/common'
export const getLoginInfo = () => {
  return request<ILoginInfo>({
    method: 'GET',
    url: '/login/info',
  })
}

export const getCaptcha = () => {
  return request<Blob>({
    method: 'GET',
    url: '/captcha_pro',
    responseType: 'blob',
    params: {
      stamp: Date.now(),
    },
  })
}

export const login = (data: { account: string; pwd: string; imgcode: string }) => {
  return request<ILoginResponse>({
    method: 'POST',
    url: '/login',
    data,
  })
}

export const logout = () => {
  return request<ILoginResponse>({
    method: 'GET',
    url: '/setting/admin/logout',
  })
}
