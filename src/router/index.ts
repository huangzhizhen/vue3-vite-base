import {
  createRouter,
  createWebHistory,
  RouteRecordRaw
} from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'
import { RouterView } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/login/index.vue'),
    meta: {
      hidden: true
    },
  },
  {
    path: '/baseData',
    name: 'Root',
    component: AppLayout,
    redirect: '/personManger',
    meta: {
      title: '基础数据',
      icon: 'Operation',
      iconType:1 //1-el,2-svg
    },
    children: [
      {
        path: "personManger",
        name: "personManger",
        component: () => import("@/views/baseData/personManger.vue"),
        meta: {
          title: '人员管理',
          icon: 'Avatar',
          iconType:1
        },
      },
      {
        path: "deptManger",
        name: "deptManger",
        component: () => import("@/views/baseData/deptManger.vue"),
        meta: {
          title: '部门管理',
          icon: 'SetUp',
          iconType:1
        },
      },
      {
        path: 'gitPersonManger',
        name: 'gitPersonManger',
        component: () => import('@/views/baseData/gitPersonManger.vue'),
        meta: { title: 'Git账号列表', icon: 'Connection',
          iconType:1 },
      },
    ]
  },
  {
    path: '/setting',
    name: 'setting',
    component: AppLayout,
    redirect: '/personSet',
    meta: {
      title: '设置setting',
      icon: 'user',
      iconType:1
    },
    children: [
      {
        path: "personSet",
        name: "personSet",
        component: () => import("@/views/setting/deptSet.vue"),
        meta: {
          title: '人员代码质量',
          icon: 'icon-founderbusiness',
          iconType:2
        },
      },
      {
        path: "deptSet",
        name: "deptSet",
        meta: {
          title: '部门代码质量',
          icon: 'icon-bumenzhiliang',
          iconType: 2,
        },
        component: () => import("@/views/setting/personSet.vue")
      }
    ]
  },
  {
    path: "/:catchAll(.*)", // 不识别的path自动匹配404
    component: () => import("@/views/notFound.vue"),
    meta: {
      title: 'home',
      hidden: true
    },
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
