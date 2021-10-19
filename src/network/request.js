import axios from 'axios'

export function requestLocal (config) {
  const instance = axios.create({
    baseURL: 'http://192.168.2.136:8000',
    timeout: 5000
  })
  // 请求拦截器
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err)
  })
  // 响应拦截器
  instance.interceptors.response.use(config => {
    return config
  }, err => {
    console.log(err)
  })
  // 返回一个axios实例(Promise)
  return instance(config)
}

export function requestServer (config) {
  const instance = axios.create({
    baseURL: 'http://192.168.1.231:8080',
    timeout: 5000
  })
  // 请求拦截器
  instance.interceptors.request()
  // 响应拦截器
  instance.interceptors.response()
  // 返回一个axios实例(Promise)
  return instance(config)
}
