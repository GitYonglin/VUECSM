// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router'

import Vuex from 'vuex'
import store from './store/store'

import Axios from 'axios'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import Ajax from './commonJs/ajax'
import Unity from './commonJs/unity'

Vue.use(Vuex)
Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.prototype.$axios = Axios
Vue.prototype.$ajax = Ajax
Vue.prototype.$unity = Unity

Vue.filter('priceV', (value) => {
  console.log(value)
  if (!value) {
    return '0.00'
  }
  return Number(value).toFixed(2)
})
Vue.filter('imgV', (value) => {
  if (value && value.length > 0) {
    return value[0].imgUrl
  }
  return ''
})
// Axios.defaults.withCredentials = true //跨域携带cookie
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
