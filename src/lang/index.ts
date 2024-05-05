import { I18n, createI18n } from 'vue-i18n'
import { App } from 'vue';
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import enUS from 'element-plus/es/locale/lang/en'

import locale_zhCn from '@/lang/local/zh-CN.ts'
import locale_enUs from '@/lang/local/en-US.ts'

const messages = {
  zh: Object.assign(locale_zhCn, zhCn),
  en: Object.assign(locale_enUs,enUS)
}

const il8n: I18n = createI18n({
  globalInjection: true, // 如果设置true, $t() 函数将注册到全局
  legacy: false, //如果想在composition api中使用需要设置为false
  locale: localStorage.getItem('lang') || 'zh',
  messages
})




export default il8n
