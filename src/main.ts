import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import store from './store'
// import * as Highcharts from 'highcharts';
// 加载 Highstock 或 Highmaps 方式类似
// import Highcharts from 'highcharts/highstock';

// 加载导出模块
// import * as Exporting from 'highcharts/modules/exporting';
// 初始化导出模块
import "@/styles/index.scss";
import il8n from './lang'
import UserIcon from '@/components/SvgIcon/kvIcon.js';
const {name,kvIcon} = UserIcon;
const app = createApp(App)

app.component(name,kvIcon)
// Exporting(Highcharts);

app.use(store);
app.use(router);
app.use(il8n);
app.mount('#app');

