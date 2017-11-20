import Vue from 'vue'
import Vuex from 'vuex'
import persist from 'vuex-localstorage'
// Modules
import auth from './modules/authentication/auth'
import category from './modules/category/index'
import page from './modules/page/index'
import learningPaths from './modules/learning-paths/index'

Vue.use(Vuex)
const store = new Vuex.Store({
  plugins: [persist({
    namespace: 'aws-vuejs-cognito',
    initialState: {},
    expires: 7 * 24 * 60 * 60 * 1e3 // 1 week
  })],
  modules: {
    auth,
    category,
    page,
    learningPaths
  }
})

export default store
