import { createApp } from 'vue';

import App from './App.vue';
import echarts from './utils/echarts';

const app = createApp(App);
app.config.globalProperties.$echarts = echarts;
createApp(App).mount('#app');
