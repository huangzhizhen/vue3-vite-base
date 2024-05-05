import request from '@/utils/request'

export function getDeptList() {
  return request({
    url: "/codex/group/groups",
    method: "get",
  });
}

export function updateDept(data: any) {
  return request({
    url: "/codex/group/save",
    method: "post",
    data
  });
}

