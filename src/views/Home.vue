<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-01 16:51:26
 * @LastEditTime: 2019-08-26 11:26:50
 * @LastEditors: Please set LastEditors
 -->
<template>
<div>
  <el-form :model="formData" ref="formData" :rules="rules" label-width="140px">
    <el-form-item label="请输入数字" prop="phone">
      <el-input v-model="formData.phone"></el-input>
    </el-form-item>
    <el-form-item label="请输入邮箱" prop="email">
      <el-input v-model="formData.number"></el-input>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
export default {
  data() {
    return {
      formData: {

      },
      rules: {
        phone: [{
          required: true,
          validator: rules.FormValidate.Form().validateNumber,
          trigger: 'blur'
        }],
        email: [{
          required: true,
          validator: rules.FormValidate.Form().validateEmail,
          trigger: 'blur'
        }]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
