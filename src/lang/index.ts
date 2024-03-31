import  {createI18n }  from 'vue-i18n'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import locale_zhCn from '@/lang/local/zh-cn'
import locale_enUs from '@/lang/local/en-US'

const messages = {
  zh: Object.assign(locale_zhCn, zhCn),
  en: Object.assign(locale_enUs)
}

const il8n = new createI18n({
  locale: 'zh',
  // legacy: false, // 如果要支持compositionAPI，此项必须设置为false;
  globalInjection: true, // 全局注册$t方法
  messages
})

export default il8n
