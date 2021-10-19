import {requestLocal} from "network/request";

export function getHomeMultiData() {
  return requestLocal({
    uri: '/home/multidata'
  })
}
