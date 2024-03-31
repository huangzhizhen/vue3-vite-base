import { defineStore } from 'pinia'
export const useAppLayoutStore = defineStore('appLayout', {
  state: () => ({
    isCollapse: false,
    activeIndex: localStorage.getItem('activeIndex')
  }),
  actions: {
    toggleCollapse() {
      this.isCollapse=!this.isCollapse
    },
    setActiveIndex(index: string) {
      this.activeIndex = index
      localStorage.setItem('activeIndex', index)
    }
  }
})
