import request from '@/utils/request'

export function create(data) {
  return request({
    url: '/admin/design/service',
    method: 'post',
    data: data
  })
}
