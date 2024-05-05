import request from '@/utils/request'

export function getPersonList(params:{}) {
  return request({
    url: '/codex/user/alluser',
    method: 'get',
    params: params
  })
}
