/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-01 16:51:26
 * @LastEditTime: 2019-11-01 16:49:43
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import Router from 'vue-router'
import home from './views/Home'
import layout from './views/layout'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('./views/login.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      redirect: '/product',

      /* path: '/home',
      name: 'home',
      component: home,
      redirect: '/product', */
      children: [
        {
          path: '/product',
          name: 'product',
          meta: [
            {
              url: '/login',
              name: '产品'
            },
            {
              // url: '/login',
              name: '产品分类'
            }
          ],
          component: () => import('./views/product')
        },
        {
          path: '/about',
          name: 'about',
          meta: [
            {
              url: '/login',
              name: '关于'
            },
            {
              // url: '/login',
              name: '关于分类'
            },
            {
              url: '/verify',
              name: '关于分类'
            }
          ],
          component: () => import('./views/About.vue')
        },
        {
          path: '/verify',
          name: 'verify',
          meta: [

          ],
          component: () => import('./views/verify.vue')
        },
        {
          path: '/qrDemo',
          name: 'qrDemo',
          meta: [

          ],
          component: () => import('./views/qrDemo.vue')
        },
        {
          path: '/step',
          name: 'step',
          meta: [

          ],
          component: () => import('./views/step.vue')
        },
        {
          path: '/guide',
          name: 'guide',
          meta: [

          ],
          component: () => import('./views/guide.vue')
        },
        {
          path: '/lead',
          name: 'lead',
          meta: [

          ],
          component: () => import('./views/lead.vue')
        },
        {
          path: '/edit',
          name: 'edit',
          meta: [

          ],
          component: () => import('./views/edit.vue')
        },
        {
          path: '/g2',
          name: 'g2',
          meta: [

          ],
          component: () => import('./views/g2.vue')
        },
        {
          path: '/edit2',
          name: 'edit2',
          meta: [

          ],
          component: () => import('./views/edit2.vue')
        },
        {
          path: '/response',
          name: 'response',
          meta: [

          ],
          component: () => import('./views/response.vue')
        },
        {
          path: '/login',
          name: 'login',
          meta: [

          ],
          component: () => import('./views/login.vue')
        },
        {
          path: '/es6',
          name: 'es6',
          meta: [

          ],
          component: () => import('./views/es6.vue')
        },
        {
          path: '/binding',
          name: 'binding',
          meta: [

          ],
          component: () => import('./views/new/binding')
        },
        {
          path: '/vuex',
          name: 'vuex',
          meta: [

          ],
          component: () => import('./views/new/vuex')
        }
      ]
    }]
});