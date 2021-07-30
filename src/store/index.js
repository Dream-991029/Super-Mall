import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'


Vue.use(Vuex)

const state = {

}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules:{

  }
})

export default store
