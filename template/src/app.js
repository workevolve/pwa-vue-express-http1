// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MainAppLayout from './pages/MainAppLayout.vue'
import store from './store/index'
import router from './router/index'
import { sync } from 'vuex-router-sync'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
// FontAwesome icons
import Icon from 'vue-awesome/components/Icon'

if (typeof window !== 'undefined') {
  window.IntersectionObserver = require('intersection-observer-polyfill/dist/IntersectionObserver.global')
}

sync(store, router)
Vue.config.productionTip = false

// Enable BootstrapVue and Icon in Vue
Vue.use(BootstrapVue)
Vue.component('icon', Icon)

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  store,
  ...MainAppLayout
})

export { app, router, store }
