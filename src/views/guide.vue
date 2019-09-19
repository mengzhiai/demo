<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-19 11:06:42
 * @LastEditTime: 2019-09-19 14:28:55
 * @LastEditors: Please set LastEditors
 -->
<template>
<div>
  <div class="item" v-intro="ssssw" v-intro-position="'bottom'">a</div>
  <div class="item" v-intro="'点击下拉框可选择角色'" v-intro-position="'bottom'">b</div>
  <div class="item" v-intro="'点击下拉框可选择角色'" v-intro-position="'bottom'">c</div>
  <div class="item" v-intro="'点击下拉框可选择角色'" v-intro-position="'bottom'">d</div>
</div>
</template>

<script>
export default {
  data() {
    return{
      ssssw: require('../assets/logo.png')
    }
  },
  mounted() {
    this.showIntro();
  },
  methods: {
    showIntro() {
      this.$nextTick(() => {
        var introJS = require('intro.js')
        // introJS().start() // 退出引导调用 exit() 即可
        introJS().setOptions({
          prevLabel: "上一步",
          nextLabel: "下一步",
          skipLabel: "跳过",
          doneLabel: "取消",
          positionPrecedence: ["bottom", "top", "right", "left"],
          overlayOpacity: 0.5,
          highlightClass: 'tool-col',
          /* 是否允许点击空白处退出 */
          exitOnOverlayClick: false,
          /* 是否滑动到高亮的区域 */
          scrollToElement: true,
          showButtons: true,
        }).start();
        console.log(introJS);
        // console.log(introJs().exit());
        /* introJs().exit(function(){
          alert(23242);
        })
        introJs().onexit(function () {
          alert("exit of introduction");
        }); */
      })
      /* this.$nextTick(() => {
        this.skipIntro();
      }) */
    },
  }
}
</script>

<style lang="scss" scoped>

</style>
