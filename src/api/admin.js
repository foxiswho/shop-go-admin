import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/admin/admin',
    method: 'get',
    params: query
  })
}
export function fetchPv(pv) {
  return request({
    url: '/admin/pv',
    method: 'get',
    params: { pv }
  })
}
export function update(data) {
  return request({
    url: '/admin',
    method: 'put',
    data
  })
}
export function create(data) {
  return request({
    url: '/admin',
    method: 'post',
    data
  })
}
