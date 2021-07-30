import axios from 'axios'

export function requestLocal (config) {
  const instance = axios.create({
    baseURL: 'http:192.168.2.136:8080',
    timeout: 5000
  })
  return instance(config)
}