<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-01 16:51:26
 * @LastEditTime: 2019-08-28 15:11:46
 * @LastEditors: Please set LastEditors
 -->
<template>
<div>
  <crumbsMenu></crumbsMenu>
  <div>我是关于我们页</div>
  <div class="link">dddddddddddddd</div>
  <div class="box">
    <el-form :model="form" ref="form" label-width="80px">
      <el-form-item label="">
        <el-input v-model="form.aaa" class="my-input"></el-input>
      </el-form-item>
      <el-form-item>
      </el-form-item>
    </el-form>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        aaa: ''
      },
      demo: ''
    }
  },
  watch: {
    form: {
      /* aaa: function (val) {
        console.log(val);
        this.value = this.form.aaa.toUpperCase();
        this.form.aaa = this.value;
        // return this.demo.toUpperCase();
      } */
      handler: function(val){
        console.log(val.aaa);
        console.log(val.aaa);
        this.form.aaa = val.aaa.toUpperCase();
      },
      deep: true
    }

  },
  mounted() {
    // this.nowDate = new Date().format("yyyy-MM-dd")
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import '@/style/common.scss';

.link {
  height: $height;
  border: 1px solid #ccc;
}
</style>
