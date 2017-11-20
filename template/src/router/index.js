import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import resource from './routes'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: resource.routes
})

router.beforeEach((to, from, next) => {
  // Use the page's router title to name the page
  if (to.meta && to.title) {
    document.title = to.title
  }

  // Redirect to the login page if not authenticated
  // for pages that have 'auth: true' set
  if (to.meta && to.meta.requiresAuth !== undefined) {
    // Resource require authentication / guard service
    if (to.meta.requiresAuth) {
      // User has currently logged in
      if (store.getters.isAuthenticated) {
        // Navigate to the requested resource
        next()
      } else {
        // Redirect to route name login
        router.push({ name: 'login' })
      }
    } else {
      // User has currently logged in
      if (store.getters.isAuthenticated) {
        // Redirect to route name home
        router.push({ name: 'home' })
      } else {
        // Navigate to the requested resource
        next()
      }
    }
  } else {
    next()
  }
})
export default router
