import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/admin_login/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/admin/admin/info',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/admin_login/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/admin/admin/info',
    method: 'get'
  })
}

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/admin_login/login',
    method: 'post',
    data
  })
}
