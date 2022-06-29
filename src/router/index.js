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
    path: '/login',
    name: 'login',
    component: LoginView
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {

  // eslint-disable-next-line no-prototype-builtins
  if (to.name !== 'login' && !window.localStorage.hasOwnProperty('usuario-logeado')) {
    next({
      name: 'login'
    })
  } else next()
})

export default router
