import request from '@/utils/request'
export function relationList(params={}) {
  return request({
    url: '/codex/project/relationList',
    method: 'get',
    params
  })
}

export function relationGvsProject(data={}) {
  return request({
    url: '/codex/project/relationGvsProject',
    method: 'post',
    data
  })
}

export function getBugSystemName(params={}) {
  return request({
    url: '/codex/system/getBugSystemName',
    method: 'get',
    params
  })
}

export function getProjectNameList(params={}) {
  return request({
    url: '/codex/user/selectuserproject',
    method: 'get',
    params: params
  })
}

