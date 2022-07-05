import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import {setCookie, getCookie, delCookie} from "@/assets/login/cookie";

Vue.config.productionTip = false
Vue.prototype.$cookieStore = {
  setCookie,
  getCookie,
  delCookie
}

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
