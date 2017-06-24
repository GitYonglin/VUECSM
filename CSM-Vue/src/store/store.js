import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  navMenu: {
    one: null,
    two: null,
    title: ''
  }
}

const mutations = {
  navMenu (state, data) {
    console.log('tttttttt-----', data)
    state.navMenu = data
  }
}

export default new Vuex.Store({
  state,
  mutations
})
