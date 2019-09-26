<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-19 14:53:08
 * @LastEditTime: 2019-09-19 17:02:08
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="flex">
    <!-- <div class="flex">
    <div>1</div>
    <div class="test">2</div>
    <div>3</div>
  </div>
    <el-dialog title :visible.sync="dialog1" width="30%">1111</el-dialog>-->
    <!-- <div class="w1"></div> -->
    <div>
      <div class="w1"></div>
      <div id="walkthrough-1" v-show="false">1111</div>
    </div>
    <div>
      <div class="w2"></div>
      <div id="walkthrough-2">jQuery</div>
    </div>
    <div>
      <div class="w3">212222</div>
      <div id="walkthrough-3" v-show="false">
        第二部演示
        <img src="../assets/logo.png" alt />
      </div>
    </div>
    <div>
      <div class="w4"></div>
      <div id="walkthrough-4">第三部演示</div>
    </div>
  </div>
</template>

<script>
import pagewalkthrough from "../utils/jquery.pagewalkthrough.js";
export default {
  data() {
    return {
      dialog1: false
    };
  },
  mounted() {
    console.log($(".test").html());
    $("body").pagewalkthrough({
      name: "introduction",
      steps: [
        {
          popup: {
            //定义弹出提示引导层
            content: "模块指导",
            type: "modal"
          }
        },
        {
          wrapper: ".w1",
          //当前引导对应的元素位置
          popup: {
            content: "#walkthrough-1",
            //关联的内容元素
            type: "tooltip",
            //弹出方式（tooltip和modal以及nohighlight）
            position: "bottom" //弹出层位置（top,left, right or bottom）
          }
        },
        {
          wrapper: ".w2",
          popup: {
            content: "#walkthrough-2",
            type: "tooltip",
            position: "bottom"
          }
        },
        {
          wrapper: ".w3",
          popup: {
            content: "#walkthrough-3",
            type: "tooltip",
            position: "bottom"
          }
        },
        {
          wrapper: ".w4",
          popup: {
            content: "#walkthrough-4",
            type: "tooltip",
            position: "bottom"
          }
        }
      ],
      buttons: {
        jpwClose: {
          i18n: "点击关闭"
        },
        jpwNext: {
          i18n: "下一步 &rarr;"
        },
        jpwPrevious: {
          i18n: "&larr; 上一步"
        },
        jpwFinish: {
          i18n: "完成 &#10004;"
        }
      }
    });

    // 一步一步显示引导页
    $("body").pagewalkthrough("show");
  }
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  justify-content: center;
  width: 300px;

  div {
    border: 1px solid #ccc;
    width: 100px;
    height: 60px;
    line-height: 60px;
  }
}

.flex {
  display: flex;
  width: 1000px;

  > div {
    width: 25%;
    line-height: 30px;
    border: 1px solid #ccc;
  }
}
</style>
