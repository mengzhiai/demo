/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-01 16:51:26
 * @LastEditTime: 2019-08-19 15:08:58
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
// import mess from './components/message'
import crumbsMenu from './components/common/crumbsMenu/crumbs'
import axios from 'axios';
Vue.prototype.$axios = axios;
Vue.prototype.axios = axios;
Vue.use(crumbsMenu)

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
