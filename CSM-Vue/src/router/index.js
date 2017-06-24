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
import GoodsCookbook from '../components/02.goods/cookbook/cookbook.vue'
import GoodsCookbookCategory from '../components/02.goods/cookbook/category.vue'
import GoodsCookbookEdit from '../components/02.goods/cookbook/edit.vue'
import Goodspack from '../components/02.goods/pack/pack.vue'
import GoodspackCategory from '../components/02.goods/pack/category.vue'
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
      { path: 'edit', component: FoodsEdit, name: '食材编辑', heddin: true }
    ]
  },
  {
    path: '/goods',
    url: '/goods',
    name: '商品',
    component: NavMenu,
    children: [
      { path: '', component: Goods, name: '商品概览', url: '/goods/' },
      { path: 'cookbook', component: GoodsCookbook, name: '菜谱概览', url: '/goods/cookbook' },
      { path: 'cookbook/category', component: GoodsCookbookCategory, name: '菜谱分类', url: '/goods/cookbook/category' },
      { path: 'cookbook/edit', component: GoodsCookbookEdit, name: '菜谱编辑', heddin: true },
      { path: 'pack', component: Goodspack, name: '套餐概览', url: '/goods/pack' },
      { path: 'pack/category', component: GoodspackCategory, name: '套餐分类', url: '/goods/pack/category' },
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

router.beforeEach((to, from, next) => {
  console.log(to)
  let two = routes.filter(i => i.url === to.matched[0].path)
  console.log('two---', two)
  if (two[0].leat) {
    store.commit('navMenu', {one: routes, two: ''})
  } else {
    store.commit('navMenu', {one: routes, two: two[0].children, title: two[0].name, threeTitle: to.name})
  }
  console.log(store.state.navMenu)
  next()
})

export default router
