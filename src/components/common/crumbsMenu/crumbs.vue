<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 09:19:26
 * @LastEditTime: 2019-08-26 14:30:33
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item,i) in $route.meta" :key="i" :to="{path: item.url}">{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
  export default {
    // props:["crumbData"],
    data(){
      return{
      }
    },
    mounted(){
      // console.log(this.crumbData);
      // this.crumbMenu = this.crumbData;
    },
    methods:{

    }
  }
</script>

<style lang="scss" scoped>

</style>