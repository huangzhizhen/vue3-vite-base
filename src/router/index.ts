import {
  createRouter,
  createWebHistory,
  RouteRecordRaw
} from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'
// import { RouterView } from 'vue-router'
import IconMenuCompany from '~icons/menu/company';
import IconMenuPerson from '~icons/menu/person';
import IconMenuBar from '~icons/menu/bar';
import IconMenuBar1 from '~icons/home/bar1';
import IconIcBaseline5g from '~icons/ic/baseline-5g'
import i18n from "@/lang/index"
const { locale, t } = i18n.global
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/login/index.vue'),
    meta: {
      hidden: true
    },
  },
  {
    path: '/warm',
    name: 'warm',
    component: AppLayout,
    redirect: '/warmList',
    meta: {
      title: t('common.monitorWarning'),
      icon: IconMenuBar1,
    },
    children: [
      {
        path: "warmList",
        name:'warmList',
        component: () => import('@/views/warm/index.vue'),
        meta: {
          title: i18n.global.t('common.monitorWarning'),
          icon: IconMenuCompany,
        },
      }
    ]
  },
  {
    path: '/baseData',
    name: 'baseData',
    component: AppLayout,
    redirect: '/personManger',
    meta: {
      title: '基础数据',
      icon: IconMenuBar1,
    },
    children: [
      {
        path: "personManger",
        name: "personManger",
        component: () => import("@/views/baseData/personManger.vue"),
        meta: {
          title: '人员管理',
          icon: IconMenuCompany,
        },
      },
      {
        path: "deptManger",
        name: "deptManger",
        component: () => import("@/views/baseData/deptManger.vue"),
        meta: {
          title: '部门管理',
          icon: IconMenuBar,
        },
      },
      {
        path: 'gitPersonManger',
        name: 'gitPersonManger',
        component: () => import('@/views/baseData/gitPersonManger.vue'),
        meta: { title: 'Git账号列表', icon: IconMenuBar1},
      },
      {
        path: 'projectManager',
        name: 'projectManager',
        component: () => import('@/views/baseData/projectManager.vue'),
        meta: { title: '项目管理', icon: 'Connection'},
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
      icon: 'Setting',
    },
    children: [
      {
        path: "personSet",
        name: "personSet",
        component: () => import("@/views/setting/deptSet.vue"),
        meta: {
          title: '人员代码质量',
          icon: IconIcBaseline5g,
        },
      },
      {
        path: "deptSet",
        name: "deptSet",
        meta: {
          title: '部门代码质量',
          icon: IconIcBaseline5g,
        },
        component: () => import("@/views/setting/personSet.vue")
      }
    ]
  },
  {
    path: '/echartShow',
    name: 'echartShow',
    component: AppLayout,
    redirect: '/codeCommitTotal',
    meta: {
      title: '代码提交数据分析',
      icon: 'Histogram',
    },
    children: [
      {
        path: "codeCommitTotal",
        name: "codeCommitTotal",
        component: () => import("@/views/echartShow/codeCommitTotal.vue"),
        meta: {
          title: '代码提交总量',
          icon: IconMenuBar,
        },
      },
      {
        path: "deptChart",
        name: "deptChart",
        meta: {
          title: '部门代码',
          icon: IconMenuPerson,
        },
        component: () => import("@/views/echartShow/deptChart.vue")
      },
      {
        path: "projectChart",
        name: "projectChart",
        meta: {
          title: '项目代码',
          icon: IconMenuPerson,
        },
        component: () => import("@/views/echartShow/projectChart.vue")
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

