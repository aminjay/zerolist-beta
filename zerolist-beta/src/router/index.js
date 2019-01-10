import Vue from 'vue'
import Router from 'vue-router'
import auth from '@/auth'

import Login from '@/components/Login'
import Account from '@/components/Account'
import Home from '@/components/Home'
import About from '@/components/About'

Vue.use(Router)

var routes = [
  { path: '/about', name: 'about', component: About },
  { path: '/home', name: 'home', component: Home },
  { path: '/login', name: 'login', component: Login, meta: { guestOnly: true } },
  { path: '/account', name: 'account', component: Account, meta: { requireAuth: true } },
  { path: '*', redirect: '/home' }
]

export const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  let currentUser = auth.user()
  let requireAuth = to.matched.some(record => record.meta.requireAuth)
  let guestOnly = to.matched.some(record => record.meta.guestOnly)

  if (requireAuth && !currentUser) next('login')
  else if (guestOnly && currentUser) next('account')
  else next()
})
