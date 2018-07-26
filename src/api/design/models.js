import request from '@/utils/request'

export function create(data) {
  return request({
    url: '/admin/design/models',
    method: 'post',
    data: data
  })
}
