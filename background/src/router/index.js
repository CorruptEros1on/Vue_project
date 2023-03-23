import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'home',
    component:() => import( '../views/MainView.vue'),
    redirect:'/home',
    // 子路由
    children:[
      {
        //首页
        path: '/home',
        name: 'home',
        component: () => import( '../views/HomeView.vue')
      },
      {
        // 用户管理
        path: 'about',
        name: 'about',
        component: () => import( '../views/UserView.vue')
      },
      {
        // 商品管理
        path: 'mall',
        name: 'mall',
        component: () => import( '../views/MallView.vue')
      },
      {
        // 商品管理
        path: 'user',
        name: 'user',
        component: () => import( '../views/UserView.vue')
      },
      {
        // 分页1
        path: 'page1',
        name: 'page1',
        component: () => import( '../views/pages/PageOneView.vue')
      },
      {
        // 分页2
        path: 'page2',
        name: 'page2',
        component: () => import( '../views/pages/PageTwoView.vue')
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
