<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-06 14:51:16
 * @LastEditTime: 2019-09-06 15:31:17
 * @LastEditors: Please set LastEditors
 -->

<template>
<div>
  <el-button type="primary" size="medium" @click="helpFun">系统介绍</el-button>
  <el-dialog title="OA3.0系统介绍" :visible.sync="helpDialog" width="80%" top="5%" :close-on-click-modal="false" @click="closeDialog">
    <div class="dialog-box">
      <div class="step-height">
        <el-steps :active="active" finish-status="success" align-center>
          <el-step title="流程1"></el-step>
          <el-step title="流程2"></el-step>
          <el-step title="流程3"></el-step>
        </el-steps>
      </div>
      <div v-if="active==1">
        我是步骤1
      </div>
      <div v-if="active==2">
        我是步骤2
      </div>
      <div v-if="active==3">
        我是步骤3
      </div>
      <div>
        <el-button @click="next" class="next-btn">下一步</el-button>
      </div>
    </div>
  </el-dialog>
</div>
</template>

<script>
export default {
  data() {
    return {
      active: 1,
      helpDialog: false,
    }
  },
  methods: {
    next() {
      // if (this.active++ > 2) this.active = 0;
      this.active++;
      if(this.active > 3){
        this.active = 1;
      }
    },
    helpFun() {
      this.helpDialog = true;
    },
    closeDialog(){
      this.helpDialog = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.step-height {
  // height: 60vh;
}
.dialog-box{
  height: 60vh;
  position: relative;
  .next-btn{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
}
</style>
