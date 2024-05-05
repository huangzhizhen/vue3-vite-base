import { defineStore } from 'pinia'
type User = {
  username: string
  email: string
}

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
    setUser(user:User) {
      this.username = user.username
      this.email = user.email
    }
  }
})

export default useUserStore
