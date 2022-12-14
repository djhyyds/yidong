import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/TagCode.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: 'about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../components/AboutView.vue')
      }, {
        path: 'details',
        name: 'details',
        component: () => import('../views/DetailsCode.vue')
      },
      {
        path: 'risk',
        name: 'risk',
        component: () => import('../components/RiskLevel.vue')
      },
      {
        path: 'sum',
        name: 'sum',
        component: () => import('../views/DynamicSum.vue')
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../components/AboutView.vue')
  }, {
    path: '/details',
    name: 'details',
    component: () => import('../views/DetailsCode.vue')
  },
  {
    path: '/risk',
    name: 'risk',
    component: () => import('../components/RiskLevel.vue')
  },
  {
    path: '*',
    component: HomeView
  }
]

const router = new VueRouter({
  routes
})

export default router
