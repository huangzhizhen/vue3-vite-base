import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
const router = useRouter()
export const useLoginStore = defineStore('login', {
  state: () => ({
  }),
  actions: {
    logout() {
      router.push({
        path: '/'
      })
    },
  }
})
