import Vue from 'vue'
import VueRouter from 'vue-router'

import UserView from "@/views/UserView";
import HomeView from "@/views/HomeView";
import EmpresaView from "@/views/EmpresaView";

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
    component: UserView
  },
  {
    path: '/empresa',
    name: 'empresa',
    component: EmpresaView
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
