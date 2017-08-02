import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import dataBase from './base'
import DateRules from './dateRules'
// import ajax from '../commonJs/ajax'

Vue.use(Vuex)

const state = {
  base: dataBase,
  dateRules: DateRules,
  test: {
    ttt: '123456'
  },
  // 数据加载等待
  fullscreenLoading: false,
  // 菜单参数
  navMenu: {
    one: null,
    two: null,
    title: ''
  },
  foodCategoryData: null,
  goodsCategoryData: null,
  goodsCategoryEdit: {
    editCategoryTitle: null,
    editCategory: false,
    category: {
      id: null,
      name: '',
      imgFile: null,
      imgUrl: 'https://cn.vuejs.org/images/logo.png',
      createDate: null,
      modifyDate: '',
      index: null,
      upId: null
    }
  },
  tabData: [
    {
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
      sales: 9999,
      edit: false
    }, {
      id: '3',
      name: '好滋好味鸡蛋仔',
      imgUrl: 'http://element.eleme.io/static/hamburger.50e4091.png',
      price: 99,
      number: 999,
      shelves: true,
      sales: 9999,
      edit: false
    }, {
      id: '4',
      name: '好滋好味鸡蛋仔',
      imgUrl: 'http://element.eleme.io/static/hamburger.50e4091.png',
      price: 99,
      number: 999,
      shelves: true,
      sales: 9999,
      edit: false
    }
  ]
}

const mutations = {
  // 菜单数据
  navMenu(state, data) {
    state.navMenu = data
  },
  // 食材分类数据
  foodCategoryData(state, data) {
    // 食材分类获取
    // axios({
    //   method: 'get',
    //   url: 'http://localhost:3000/foodCategory'
    // }).then(response => {
    //   state.foodCategoryData = response.data
    // })
    state.foodCategoryData = data
  },
  // 商品分类编辑控制
  goodsCategoryEdit(state, data) {
    // 这个方法不会触发watch监听方法, 模板可以更新
    Object.assign(state.goodsCategoryEdit, data)
  },
  // 商品分类数据
  goodsCategoryData(state, data) {
    state.goodsCategoryData = data
  }
}

const actions = {
  // 商品分类数据处理
  goodsCategoryData(context) {
    axios({
      method: 'get',
      url: 'http://localhost:3000/goodsCategory'
    }).then(response => {
      let item = response.data
      let c = []
      let i = 1
      // index分组
      for (let index = 0; index < item.length; index = 0) {
        c.push(item.filter(item => item.index === i))
        item = item.filter(item => item.index !== i)
        i++
      }
      // upId分组
      for (let ii = c.length - 1; ii > 0; ii--) {
        c[ii - 1].forEach((item, index) => {
          let l = c[ii].filter(im => im.upId === item.id)
          if (l.length > 0) {
            item.children = l
          }
        })
      }
      context.commit('goodsCategoryData', c[0])
    })
  },
  foodCategoryData(context) {
    // 食材分类获取
    // console.log(ajax.get('http://localhost:3000/foodCategory'))
    axios({
      method: 'get',
      url: 'http://localhost:3000/foodCategory'
    }).then(response => {
      context.commit('foodCategoryData', response.data)
    })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
