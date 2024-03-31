import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import store from './store'
// import "@/styles/normalize.css";

import "@/styles/index.scss";
import il8n from './lang'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
import './assets/iconfont/iconfont.ts';
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(store);
app.use(router);
app.use(il8n);
app.component('SvgIcon', SvgIcon);
app.mount('#app');

