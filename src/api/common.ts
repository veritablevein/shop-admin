/**
 * 公共基础接口封装
 */
import request from '@/utils/request'
import { ILoginInfo, ILoginResponse } from './type/common'

// interface ResponseData <T = any>{
//   status: number
//   msg: string
//   data: T
// }

export const getLoginInfo = () => {
  return request<ILoginInfo>({
    method: 'GET',
    url: '/admin/login/info'
  })

  // return request.get<{
  //   status: number
  //   msg: string
  //   data: {
  //     logo_square: string
  //     logo_rectangle: string
  //     login_logo: string
  //     slide: string[]
  //   }
  // }>('/login/info')

  // return request.get<ResponseData<{
  //   logo_square: string
  //   logo_rectangle: string
  //   login_logo: string
  //   slide: string[]
  // }>>('/login/info')
}
export const getCaptcha = () => {
  return request<Blob>({
    method: 'GET',
    url: '/admin/captcha_pro',
    params: {
      stamp: Date.now()
    },
    responseType: 'blob' // 请求获取图片数据
  })
}

export const login = (data: {
  account: string
  pwd: string
  imgcode: string
}) => {
  return request<ILoginResponse>({
    method: 'POST',
    url: '/admin/login',
    data
  })
}
