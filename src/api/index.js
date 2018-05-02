import http from '@/utils/http'

export function login(params) {
  return http({
    url: '',
    method: 'post',
    data: params
  })
}

export function uploadFileRequest(url, params) {
  return http({
    method: 'post',
    url: url,
    data: params,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
