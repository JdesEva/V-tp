import Vue from 'vue'
import Router from 'vue-router'

import welcome from './views/welcome/welcome.vue'
import index from './views/index/index.vue'

Vue.use(Router)

const router = new Router({
  routes: [{
  	path: '/',
  	redirect: '/welcome'
  }, {
  	path: '*',
  	redirect: '/welcome'
  }, {
  	path: '/welcome',
  	name: 'welcome',
  	component: welcome
  }, {
    path: '/index',
    name: 'index',
    component: index,
    children: []
  }]
})

export default router
