/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-01 16:51:26
 * @LastEditTime: 2019-11-01 17:38:50
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    objData: {
      num: 0
    }
  },
  mutations: {
    add(state, data) {
      // return (state.count += 1)
      data = parseFloat(data);
      state.count += data;
      state.objData.num = data;

    },
    reduce(state, data) {
      // return (state.count -= 1)
      state.objData.num = data;
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
