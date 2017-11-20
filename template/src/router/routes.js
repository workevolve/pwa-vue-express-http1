
/**
 * ***************************************************************************************
 * @description What you will need to do with routes are as following:
 * @description 1. Add resources that you need to guard in guardedRoutes block
 * @description 2. Add resources that you don't need to guard in openRoutes block
 * @description 3. Import components that are used for setting routes in the import block
 * @since 2017-11-7
 * @author Phat Phyrom<phyrom.phat@workevolve.com>
 * @return {anonymous object} routes
 * ***************************************************************************************
 */

import Home from '../components/authentication/Home'
import Login from '../components/authentication/Login'
import Callback from '../components/authentication/Callback'
import ErrorMsg from '../components/authentication/ErrorMsg'

/**
 * @function guardedRoute
 * @description Group of guarded routes
 * @description you list any route that you want to guard here
 */

var guardedRoutes = [
  { path: '/home', name: 'home', component: Home, title: 'Home' }
]
/**
 * @function openRoute
 * @description Group of non-guarded routes
 * @description you list any route that you don't require security guard
 */
var openRoutes = [
  { path: '/', name: 'login', component: Login, title: 'Login' },
  { path: '/callback', name: 'callback', component: Callback, title: 'Authenticating...' },
  { path: '/error', name: 'error', component: ErrorMsg, props: true, title: 'Error' }
]

/**
 * @function secure
 * @description Modify route resource to include security meta data
 * @param {route resource} resource
 * @param {boolean} auth
 * @return modify
 */
function secure (resource, auth) {
  var _item = resource
  _item.meta = { requiresAuth: auth }
  return _item
}

/**
 * @function anonymous function
 * @description Export anonymous function. Importer can use any term as function
 * @description It's for used with vue-router
 */
export default {
  // Init function
  constructor () {
    // Modify route's resources by adding meta = {requiredAuth: true}
    guardedRoutes.map(e => secure(e, true))
    /* guardedRoutes.map(function (e) {
      return secure(e, true)
    }) */
    // Modify routes' resources by adding meta = {requiredAuth: false}
    openRoutes.map(e => secure(e, false))
    /* openRoutes.map(function (e) {
      return secure(e, false)
    }) */
  },
  get routes () {
    return [].concat(guardedRoutes, openRoutes)
    // ES6 way to combine multiple arrays using triple dot (...)
    // return [...guardedRoutes, ...openRoutes]
    // return openRoutes.concat(guardedRoutes), is the alternative to use classic array.concat()
  }
}
