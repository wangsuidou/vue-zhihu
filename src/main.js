// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Root from './Root'
import { router } from './router'
import store from './vuex/store.js'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<Root/>',
  components: { Root },
  router,
  store
})
