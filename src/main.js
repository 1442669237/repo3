import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import less from 'less'
import 'lib-flexible/flexible'
Vue.use(less)

import echarts from "echarts";
Vue.prototype.$echarts = echarts;

axios.defaults.baseURL = 'http://127.0.0.1:8080'
Vue.prototype.axios = axios

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
