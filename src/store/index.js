import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters // if we need to compute derived state based on store state, eg : we have the list in the store, but we need to get the size of the list; then we need 'getters'
})
