/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-01 16:51:26
 * @LastEditTime: 2019-09-19 14:24:32
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './style/common.css'
import App from './App.vue'
import router from './router'
import store from './store'
import G2 from '@antv/g2';
import rules from './utils/rules'
// import common from './utils/common.js'
// import mess from './components/message'
import crumbsMenu from './components/common/crumbsMenu/crumbs'

import 'intro.js/introjs.css';
import VueIntro from 'vue-introjs'
import axios from 'axios';
Vue.prototype.axios = axios;
// Vue.prototype.common = common
// Vue.use(guide)

Vue.use(crumbsMenu)
Vue.use(G2)
Vue.use(VueIntro); 
Vue.prototype.$rules = rules;

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
