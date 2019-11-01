<!--
 * @Author: your name
 * @Date: 2019-11-01 16:27:19
 * @LastEditTime: 2019-11-01 17:36:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo\src\views\new\vuex.vue
 -->
<template>
  <div>
    <div>{{message}}</div>
    <div>count:{{count}}</div>
    <el-form :model="form" ref="form" label-width="80px">
      <el-form-item label="input1">
        <el-input v-model="form.val1"></el-input>
      </el-form-item>
      <!-- <el-form-item label="input2">
        <el-input v-model="form.val2"></el-input>
      </el-form-item> -->
    </el-form>
    
    <div>
      <el-button type="primary" @click="reduceCount">减</el-button>
      <el-button type="primary" @click="addCount">加</el-button>
    </div>
  </div>
</template>

<script>
import store from '../../store'
  export default {
    store,
    data(){
      return{
        // message: $store.state.count
        form: {
          val1: 0,
          val2: 0
        }
      }
    },
    computed:{
      message(){
        return this.$store.state.objData.num
      },
      count(){
        return this.$store.state.count;
      }
    },
    methods:{
      addCount(){
        this.$store.commit("add",this.form.val1)
      },
      reduceCount(){
        this.$store.commit("reduce","redcueAll")
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>