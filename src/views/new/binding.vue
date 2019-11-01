<!--
 * @Author: your name
 * @Date: 2019-11-01 15:19:34
 * @LastEditTime: 2019-11-01 15:27:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo\src\views\new\binding.vue
 -->
<template>
  <div :obj="obj">
    <input type="text" v-model="obj.message">
    <p>{{obj.message}}</p>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        obj:{
          message: ''
        }
      }
    },
    created(){
      console.log(this.obj);
    },
    methods:{

    }
  }
</script>

<style lang="scss" scoped>

</style>