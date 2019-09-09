<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-26 13:25:31
 * @LastEditTime: 2019-09-09 17:46:50
 * @LastEditors: Please set LastEditors
 -->
<template>
<div>
<el-form :model="formData" ref="formData" label-width="80px">
  <el-form-item label="">
    <el-input v-model="formData.nowDate"></el-input>
  </el-form-item>
  <el-form-item label="">
    <el-date-picker
      v-model="formData.nowTime"
      type="date"
      format="yyyy-MM-dd HH:mm"
      placeholder="选择日期">
    </el-date-picker>
  </el-form-item>
  <el-form-item>
    {{formData.money}}
  </el-form-item>
</el-form>
<div class="box">

</div>
</div>
</template>
<script>
import {toDate1,formatDate,formatDateTime,threeNumberAPointer} from '@/utils/common.js'
export default {
  data() {
    return {
      formData:{
        nowDate: '',
        nowTime: ''
      }
    }
  },
  mounted(){
    this.init();
  },
  methods: {
    init(){
      let time = new Date().getTime();
      this.formData.nowDate = formatDateTime(time);
      this.formData.nowTime = time;
      this.formData.money = threeNumberAPointer(10000000)
    }
  }
}
</script>

<style lang="scss" scoped>
.box{
  width: 100px;
  height: 100px;
  background-color: #ccc;
}
</style>
