import Vue from 'vue'
import Vuex from 'vuex'
// import cart from './modules/cart'
// import products from './modules/products'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    //token,
    //network
  },
  mutations: {
    
  },
  getters: {

  },
  actions: {

  },
  modules: {
    //cart,
    //user
  },
//  strict: debug,
//   plugins: debug ? [createLogger()] : []
})