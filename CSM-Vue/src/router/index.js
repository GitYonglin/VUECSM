import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from '../store/store'

import Hello from '@/components/Hello'
import NavMenu from '../components/navMenu.vue'

import Foods from '../components/01.foods/foods.vue'
import FoodsCategory from '../components/01.foods/category.vue'
import FoodsEdit from '../components/01.foods/edit.vue'

import Goods from '../components/02.goods/goods.vue'
import GoodsCategory from '../components/02.goods/category.vue'
import GoodsSimgle from '../components/02.goods/simgle/simgle.vue'
import GoodsSimgleEdit from '../components/02.goods/simgle/edit.vue'
import GoodsCookbook from '../components/02.goods/cookbook/cookbook.vue'
import GoodsCookbookEdit from '../components/02.goods/cookbook/edit.vue'
import Goodspack from '../components/02.goods/pack/pack.vue'
import GoodspackEdit from '../components/02.goods/pack/edit.vue'

import Order from '../components/03.order/order.vue'

import Users from '../components/04.users/users.vue'

import Data from '../components/05.data/data.vue'

Vue.use(Vuex)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    url: '',
    name: '概览',
    component: NavMenu,
    leat: true,
    children: [
      { path: '', component: Hello }
    ]
  },
  {
    path: '/foods',
    url: '/foods',
    name: '食材',
    component: NavMenu,
    children: [
      { path: '', component: Foods, name: '食材概览', url: '/foods/' },
      { path: 'category', component: FoodsCategory, name: '食材分类', url: '/foods/category' },
      { path: 'edit', component: FoodsEdit, name: '食材编辑', alias: 'foodEdit', heddin: true }
    ]
  },
  {
    path: '/goods',
    url: '/goods',
    name: '商品',
    component: NavMenu,
    children: [
      { path: '', component: Goods, name: '商品概览', url: '/goods/' },
      { path: 'category', component: GoodsCategory, name: '商品分类', url: '/goods/category' },
      { path: 'simgle', component: GoodsSimgle, name: '单品食材', url: '/goods/simgle' },
      { path: 'simgle/edit', component: GoodsSimgleEdit, name: '单品编辑', heddin: true },
      { path: 'cookbook', component: GoodsCookbook, name: '菜谱概览', url: '/goods/cookbook' },
      { path: 'cookbook/edit', component: GoodsCookbookEdit, name: '菜谱编辑', alias: 'cookbookEdit', heddin: true },
      { path: 'pack', component: Goodspack, name: '套餐概览', url: '/goods/pack' },
      { path: 'pack/edit', component: GoodspackEdit, name: '套餐编辑', heddin: true }
    ]
  }, {
    path: '/order',
    url: '/order',
    name: '订单',
    component: NavMenu,
    leat: true,
    children: [
      { path: '', component: Order }
    ]
  }, {
    path: '/users',
    url: '/users',
    name: '用户',
    component: NavMenu,
    leat: true,
    children: [
      { path: '', component: Users }
    ]
  }, {
    path: '/data',
    url: '/data',
    name: '数据',
    component: NavMenu,
    leat: true,
    children: [
      { path: '', component: Data }
    ]
  }
]
const router = new VueRouter({
  routes
})

var bw = () => {
  var UserAgent = navigator.userAgent.toLowerCase()
  console.log(navigator)
  return {
    isUc: /ucweb/.test(UserAgent), // UC浏览器
    // isChrome: /chrome/.test(UserAgent.substr(-33, 6)), // Chrome浏览器
    isChrome: UserAgent.indexOf('chrome') > 0, // Chrome浏览器
    isFirefox: /firefox/.test(UserAgent), // 火狐浏览器
    isOpera: /opera/.test(UserAgent), // Opera浏览器
    isSafire: /safari/.test(UserAgent) && !/chrome/.test(UserAgent), // safire浏览器
    is360: /360se/.test(UserAgent), // 360浏览器
    isBaidu: /bidubrowser/.test(UserAgent), // 百度浏览器
    isSougou: /metasr/.test(UserAgent), // 搜狗浏览器
    isIE6: /msie 6.0/.test(UserAgent), // IE6
    isIE7: /msie 7.0/.test(UserAgent), // IE7
    isIE8: /msie 8.0/.test(UserAgent), // IE8
    isIE9: /msie 9.0/.test(UserAgent), // IE9
    isIE10: /msie 10.0/.test(UserAgent), // IE10
    isIE11: /msie 11.0/.test(UserAgent), // IE11
    isLB: /lbbrowser/.test(UserAgent), // 猎豹浏览器
    isWX: /micromessenger/.test(UserAgent), // 微信内置浏览器
    isQQ: /qqbrowser/.test(UserAgent) // QQ浏览器
  }
}

router.beforeEach((to, from, next) => {
  store.dispatch('foodCategoryData')
  store.dispatch('goodsCategoryData')
  console.log('路由启动了', bw())
  let two = routes.filter(i => i.url === to.matched[0].path)
  // console.log('two---', two)
  if (two[0].leat) {
    store.commit('navMenu', { one: routes, two: '' })
  } else {
    store.commit('navMenu', { one: routes, two: two[0].children, title: two[0].name, threeTitle: to.name })
  }
  // console.log(store.state.navMenu)
  next()
})

export default router
