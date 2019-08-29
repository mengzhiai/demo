/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-01 16:51:26
 * @LastEditTime: 2019-08-26 14:29:16
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import Router from 'vue-router'
import home from './views/Home'

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
            }
          ],
          component: () => import('./views/About.vue')
        }
      ]
    }]
});