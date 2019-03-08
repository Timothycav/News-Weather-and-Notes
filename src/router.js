import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import Display from './views/Display.vue'

Vue.use(Router)

let router = new Router({
 // mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
   
    {
      path: '/display',
      name: 'display',
      component: Display,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
  
})
router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('/')
  else if (!requiresAuth && currentUser) next('display')
  else next()
})
export default router