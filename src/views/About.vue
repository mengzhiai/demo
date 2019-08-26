<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-01 16:51:26
 * @LastEditTime: 2019-08-20 14:52:07
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div>
    <crumbsMenu :crumbData="crumbData"></crumbsMenu>
    <el-row>
      <el-col :span="6" :offset="6">111</el-col>
      <el-col :span="12">111</el-col>
    </el-row>
    <el-date-picker v-model="nowDate" type="date" placeholder="" format="yyyy-MM-dd"></el-date-picker>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        crumbData:{
          childName: "客户管理",
          currentName: "客户交接"
        },
        nowDate: 1566283759881
      }
    },
    mounted(){
      // this.nowDate = new Date().format("yyyy-MM-dd")
    },
    methods:{

    }
  }
</script>

<style lang="scss" scoped>

</style>