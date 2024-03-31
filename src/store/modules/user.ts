import { defineStore } from 'pinia'

const useUserStore = defineStore('user',{
  state: () => {
    return {
      username: 'huangzhizhen',
      email:''
    }
  },
  getters: {
    getName(state) {
      return state.username
    }
  },
  actions: {
    setUser(user) {
      this.username = user.username
      this.email = user.email
    }
  }
})

export default useUserStore