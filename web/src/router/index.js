import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
import home from '../views/home.vue'
import help from '../views/mapQ&A.vue'

import activity from '../views/activity.vue'

import helpcontent from '../components/Q&Acontent.vue'

import activitycontent from '../components/activitycontent.vue'


import adminindex from '../views/user/index.vue'
import adminhome from '../components/userinfo.vue'
import myself from '../views/user/myself.vue'

import notice from '../views/user/notice.vue'
import createhelp from '../views/user/Q&A/createQ&A.vue'
import createhelplist from '../views/user/Q&A/createQ&Alist.vue'
import createactivity from '../views/user/activity/createactivity.vue'
import createactivitylist from '../views/user/activity/createactivitylist.vue'

import Router from 'vue-router'

Vue.use(VueRouter)

/**
 * 重写路由的push方法
 */
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
const routes = [
  // { path: '/', name: 'index',  component: index, meta:{ispublic:true}},
  {
    path: '/',
    name: 'index',
    component: index,
    meta: { ispublic: true },
    children: [
      { path: '', name: 'home', component: home, meta: { ispublic: true } },
      { path: 'help', name: 'help', component: help, meta: { ispublic: true } },
      {
        path: 'help/:tag',
        name: 'help',
        component: help,
        props: true,
        meta: { ispublic: true }
      },
      
      {
        path: 'helpcontent/:id',
        name: 'helpcontent',
        component: helpcontent,
        props: true,
        meta: { ispublic: true }
      },
      
      {
        path: 'activitycontent/:id',
        name: 'activitycontent',
        component: activitycontent,
        props: true,
        meta: { ispublic: true }
      },
      
      
      {
        path: 'activity',
        name: 'activity',
        component: activity,
        meta: { ispublic: true }
      },
      {
        path: 'admin',
        name: 'adminindex',
        component: adminindex,
        children: [
          // { path: '*', redirect: 'admin/home', },
          { path: '', name: 'adminhome', component: adminhome },
          { path: 'myself', name: 'myself', component: myself },
          { path: 'createhelp', name: 'createhelp', component: createhelp },
          // { path: 'list', name: 'list', component: list },
          { path: 'notice', name: 'notice', component: notice },
          {
            path: 'updatehelp/:id',
            name: 'createhelp',
            component: createhelp,
            props: true
          },
          {
            path: 'createhelplist',
            name: 'createhelplist',
            component: createhelplist
          },
          {
            path: 'updateactivity/:id',
            name: 'updateactivity',
            component: createactivity,
            props: true
          },
          {
            path: 'createactivitylist',
            name: 'createactivitylist',
            component: createactivitylist
          },
          {
            path: 'createactivity',
            name: 'createactivity',
            component: createactivity
          },
          
        ]
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, Form, next) => {
  // console.log(to)
  if (!to.meta.ispublic && !localStorage.luffy_jwt_token) {
    return next('/home')
  }
  next()
})
export default router
