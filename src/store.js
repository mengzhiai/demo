/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-01 16:51:26
 * @LastEditTime: 2019-09-06 13:48:31
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1,
    
  },
  mutations: {
    add(state){
      return (state.count += 1)
    },
    reduce(state,data){
      return (state.count -= 1)
    }
    /* add(){
      state.count++;
    },
    reduce(){
      state.count--;
    } */
  },
  actions: {

  }
})
