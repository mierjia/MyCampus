import Vue from 'vue'
import VueRouter from 'vue-router'
import main from '../views/main.vue'
import login from '../views/login.vue'
import content from '../views/check/content.vue'
import comment from '../views/check/comment.vue'

import useruser from '../views/usermanage/useruser.vue'
import useradmin from '../views/usermanage/useradmin.vue'

import myself from '../views/myself/myself.vue'
import feedback from '../views/message/feedback.vue'
import report from '../views/message/report.vue'
import appeal from '../views/message/appeal.vue'
Vue.use(VueRouter)

const routes = [
    { path: '/login', name: 'login', component: login, meta: { ispublic: true } },
    {
        path: '/',
        name: 'main',
        component: main,
        children: [
            { path: '', name: 'myself', component: myself },
            { path: 'myself', name: 'myself', component: myself },
            { path: 'content', name: 'content', component: content },
            { path: 'comment', name: 'comment', component: comment },
            { path: 'useruser', name: 'useruser', component: useruser },
            { path: 'useradmin', name: 'useradmin', component: useradmin },
            { path: 'feedback', name: 'feedback', component: feedback },
            { path: 'report', name: 'report', component: report },
            { path: 'appeal', name: 'appeal', component: appeal }
        ]
    }
]

const router = new VueRouter({
    routes
})
router.beforeEach((to, Form, next) => {
    if (!to.meta.ispublic && !localStorage.admin_jwt_token) {
        return next('/login')
    }
    next()
})
export default router