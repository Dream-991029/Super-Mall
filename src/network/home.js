import { request } from "network/request";

export function getHomeMultiData() {
  return request({
    uri: '/home/multidata'
  })
}
