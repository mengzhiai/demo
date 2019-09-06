<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-04 14:27:45
 * @LastEditTime: 2019-09-06 16:26:22
 * @LastEditors: Please set LastEditors
 -->
<template>
<div>
  <el-button @click="addData">添加数据</el-button>
  <el-form ref="formRef" :rules="rules" :model="form">
    <el-form-item prop="password">
      <i></i>
      <el-input clearable type="password" v-model.trim="form.password" placeholder="请输入密码" auto-complete="true"></el-input>
      <!--<p class="tip">6-20位英文字母、数字或者符号（除空格），且字母、数字和标点符号至少包含两种</p>-->
    </el-form-item>
    <el-form-item prop="contacts">
      <el-input clearable v-model="form.contacts" placeholder="请输入联系人" auto-complete="true"></el-input>
    </el-form-item>
  </el-form>
    <el-button class="btn-login" type="primary" size="medium" @click="submitBtn('formRef')">提交申请</el-button>

</div>
</template>

<script>
import rules from "@/utils/rules.js"
export default {
  data() {
    return {
      // 提交的参数
      form: {
        companyName: '',
        number: '',
        code: '',
        password: '',
        rePassword: '',
        contacts: '', // 联系人
        phone: '',
        email: '',
        imgCode: ''
      },
      getImgCodeResults: '',
      keyResults: '',
      // 校验规则
      rules: {
        companyName: [{
            required: true,
            message: '请输入公司名称',
            trigger: 'blur'
          },
          // 可以设置双重验证标准
          {
            max: 30,
            message: '公司名称不可超过30个字符11'
          }
        ],
        number: [{
            required: false,
            validator: rules.FormValidate.Form().validateNumber,
            trigger: 'change'
          },
          {
            max: 10,
            message: '员工数量不可超过10亿'
          }
        ],
        code: [{
          required: true,
          validator: rules.FormValidate.Form().validateCode,
          rigger: 'blur'
        }],
        password: [{
          required: true,
          validator: rules.FormValidate.Form().validatePsdReg,
          rigger: 'blur'
        }],

        contacts: [{
            required: true,
            validator: rules.FormValidate.Form().validateContacts,
            rigger: 'blue'
          },
          {
            max: 10,
            message: '联系人不可超过10个字符'
          }
        ],
        phone: [{
          required: true,
          validator: rules.FormValidate.Form().validatePhone,
          trigger: 'blur'
        }],
        email: [{
          required: false,
          validator: rules.FormValidate.Form().validateEmail,
          trigger: 'change'
        }],
        imgCode: [{
          required: true,
          message: '请输入验证码',
          rigger: 'blue'
        }]
      }
    }
  },
  methods: {
    submitBtn(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          this.$message.warning("请填写完整")
          return false;
        }
      });
    },
    addData(){
      this.form.password = '12';
      this.form.contacts = '4444';


    }
  }
}
</script>

<style lang="scss" scoped>

</style>
