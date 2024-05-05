import { defineStore } from 'pinia'
import i18n from '@/lang'


export const useAppStore = defineStore('app', {
  state: () => {
    return {
       lang:  localStorage.getItem('lang') || 'zh'
    }
  },
  getters: {
  },
  actions: {
    setAppLang(lang: string) {
      this.lang = lang
      localStorage.setItem('lang', lang)
      i18n.global.locale.value = lang
    },
  }
})
