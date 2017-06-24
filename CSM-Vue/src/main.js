// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router'

import Vuex from 'vuex'
import store from './store/store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Vuex)
Vue.use(ElementUI)

Vue.config.productionTip = false

// import Axios from 'axios'
// Vue.use(Axios)
// Vue.prototype.$axios = Axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
