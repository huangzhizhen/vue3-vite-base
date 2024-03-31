import { defineStore } from 'pinia'
export const useGitPersonManagerStore = defineStore('gitPersonManager', {
  state: () => ({
    tableColum: [
      {
        label: '姓名',
        prop: "gvsUserName"
      },
      {
        label: '邮箱',
        prop: "userEmail"
      },
      {
        label: 'git账号',
        prop: "userName"
      }
    ],
  }),
  actions: {
  }
})
