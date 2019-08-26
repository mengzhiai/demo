<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 09:19:26
 * @LastEditTime: 2019-08-19 15:05:20
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div>
    <el-breadcrumb separator="/" :data="crumbMenu">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{crumbMenu.childName}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{crumbMenu.currentName}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
  export default {
    props:["crumbData"],
    data(){
      return{
        testMessage: "我是一个测试组件",
        crumbMenu:{
          childName: "",
          currentName: ""
        }
      }
    },
    mounted(){
      console.log(this.crumbData);
      this.crumbMenu = this.crumbData;
    },
    methods:{

    }
  }
</script>

<style lang="scss" scoped>

</style>