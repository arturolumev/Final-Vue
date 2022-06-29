import Vue from 'vue'
import VueRouter from 'vue-router'

import LoginView from "@/views/LoginView";
import HomeView from "@/views/HomeView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/user',
    name: 'user',
    component: LoginView
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {

  // eslint-disable-next-line no-prototype-builtins
  if (to.name !== 'home' && !window.localStorage.hasOwnProperty('usuario-logeado')) {
    next({
      name: 'home'
    })
  } else next()
})

export default router
