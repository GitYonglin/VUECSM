import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  navMenu: {
    one: null,
    two: null,
    title: ''
  },
  tabData: [{
    id: '1',
    name: '好滋好味鸡蛋仔',
    imgUrl: 'http://element.eleme.io/static/hamburger.50e4091.png',
    price: 99,
    number: 999,
    shelves: true,
    sales: 9999,
    edit: false
  }, {
    id: '2',
    name: '好滋好味鸡蛋仔',
    imgUrl: 'http://element.eleme.io/static/hamburger.50e4091.png',
    price: 99,
    number: 999,
    shelves: true,
    sales: 9999
  }, {
    id: '3',
    name: '好滋好味鸡蛋仔',
    imgUrl: 'http://element.eleme.io/static/hamburger.50e4091.png',
    price: 99,
    number: 999,
    shelves: true,
    sales: 9999
  }, {
    id: '4',
    name: '好滋好味鸡蛋仔',
    imgUrl: 'http://element.eleme.io/static/hamburger.50e4091.png',
    price: 99,
    number: 999,
    shelves: true,
    sales: 9999
  }]
}

const mutations = {
  navMenu(state, data) {
    console.log('tttttttt-----', data)
    state.navMenu = data
  }
}

export default new Vuex.Store({
  state,
  mutations
})
