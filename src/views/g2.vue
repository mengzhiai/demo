<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-26 11:22:00
 * @LastEditTime: 2019-09-29 15:13:22
 * @LastEditors: Please set LastEditors
 -->
<template>
<div>
  <div>
    <el-dialog title="" :visible.sync="myDialog" @close="closeDialog" width="40%" @open="openDialog">
      <div id="editorElem" style="text-align:left width: 300px;height: 400px"></div>
    </el-dialog>
  </div>
  <el-button type="primary" @click="getContent">查看内容</el-button>
  <el-button type="primary" @click="see">打开</el-button>
  <div id="test">ddddd</div>
</div>
</template>

<script>
import E from 'wangeditor'

export default {
  name: 'Login',
  data() {
    return {
      editorContent: '',
      myDialog: false,
      editor: {},
    }
  },
  created() {
    this.dialogIndex = "dialogIndex";
  },
  mounted() {
    // this.editPlus();
    // this.myDialog = false;
  },
  methods: {
    editPlus() {
      /* var editor = new E('#editorElem');
      editor.customConfig.menus = [
          'head', // 标题
          'bold', // 粗体
          'fontSize', // 字号
          'fontName', // 字体
          'italic', // 斜体
          'underline', // 下划线
          'strikeThrough', // 删除线
          'foreColor', // 文字颜色
          'backColor', // 背景颜色
          'link', // 插入链接
          'list', // 列表
          'justify', // 对齐方式
          'quote', // 引用
          'emoticon', // 表情
          'image', // 插入图片
          'table', // 表格
          'video', // 插入视频
          'code', // 插入代码
          'undo', // 撤销
          'redo' // 重复
        ],
        editor.customConfig.pasteFilterStyle = false;
      editor.customConfig.pasteIgnoreImg = false;
      editor.customConfig.uploadImgShowBase64 = true;
      // 将图片大小限制为 3M
      editor.customConfig.uploadImgMaxSize = 3 * 1024 * 1024;
      // 限制一次最多上传 5 张图片
      editor.customConfig.uploadImgMaxLength = 5;
      editor.customConfig.linkImgCallback = function (url) {
        console.log(url) // url 即插入图片的地址
      }
      // editor.customConfig.uploadImgServer = '/test/aaa';
      editor.customConfig.onchange = (html) => {
        this.editorContent = html
      }
      editor.create(); */
      this.editor = new E('#editorElem');
      this.editor.create();
    },

    getContent: function () {
      let data = {
        data: this.editorContent
      }
      this.axios.post('/aaa', data).then(res => {

      })
    },
    openDialog() {},
    see() {
      this.myDialog = true;
      this.editPlus();
    },
    closeDialog() {
      // editor.destroy();
      $('#editorElem').empty(); //利用jquery的方法对id为"editor"的div清空div中元素。
      this.myDialog = false;
    },
  }
}
</script>

<style lang="scss" scoped>
</style>
