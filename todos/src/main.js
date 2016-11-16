import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Login from './components/Login'
import Todos from './components/Todos'
import store from './vuex/store'

Vue.use(VueRouter)

const routes = [
  {path: '/todos', component: Todos},
  {path: '/', component: Login}
]

const router = new VueRouter({
  routes // short for routes: routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: (h) => h(App),
  router,
  store
})
