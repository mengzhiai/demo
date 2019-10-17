<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-01 16:51:26
 * @LastEditTime: 2019-10-12 10:40:56
 * @LastEditors: Please set LastEditors
 -->
<template>
<div>
  <el-row class="home">
    <el-col :span="4">
      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="product">选项1</el-menu-item>
            <el-menu-item index="about">选项2</el-menu-item>
            <el-menu-item index="verify">验证</el-menu-item>
            <el-menu-item index="qrDemo">表单验证</el-menu-item>
            <el-menu-item index="step">步骤条</el-menu-item>
            <el-menu-item index="guide">指导</el-menu-item>
            <el-menu-item index="lead">引导插件</el-menu-item>
            <el-menu-item index="edit">富文本编译器</el-menu-item>
            <el-menu-item index="g2">图表</el-menu-item>
            <el-menu-item index="edit2">编译器</el-menu-item>
            <el-menu-item index="response">响应式</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="20">
      <router-view></router-view>
    </el-col>
  </el-row>

</div>
</template>

<script>
import rules from '@/utils/rules.js'
import { setLocalStorage } from '@/utils/localStore'
export default {
  data() {
    return {
      formData: {

      },
    };
  },
  mounted(){
    this.init();
  },
  methods:{
    init(){
      setLocalStorage("testData",'123')
    },
    handleOpen(){

    },
    handleClose(){
      
    }
  }
};
</script>

<style lang="scss" scoped>
.home{
  .el-col{
    height: 100vh;
  }
}
</style>
