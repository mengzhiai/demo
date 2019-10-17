<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-26 11:22:00
 * @LastEditTime: 2019-10-15 14:19:13
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div>
    <div>
      <el-dialog title :visible.sync="myDialog" @close="closeDialog" width="40%">
        <div id="editorElem" style="text-align:left width: 300px;height: 400px"></div>
        <el-button type="primary" @click="submitBtn">提交</el-button>
      </el-dialog>
    </div>
    <el-button type="primary" @click="getContent">查看内容</el-button>
    <el-button type="primary" @click="see">打开</el-button>
    <div id="test">ddddd</div>
  </div>
</template>

<script>
import E from "wangeditor";

export default {
  name: "Login",
  data() {
    return {
      editorContent: "",
      myDialog: false,
      editor: {},
      path: [
        {
          fds: ["11", "22", "2"]
        }
      ],
      aaa: ""
    };
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
      var editor = new E("#editorElem");
      (editor.customConfig.menus = [
        "head", // 标题
        "bold", // 粗体
        "fontSize", // 字号
        "fontName", // 字体
        "italic", // 斜体
        "underline", // 下划线
        "strikeThrough", // 删除线
        "foreColor", // 文字颜色
        "backColor", // 背景颜色
        "link", // 插入链接
        "list", // 列表
        "justify", // 对齐方式
        "quote", // 引用
        "emoticon", // 表情
        "image", // 插入图片
        "table", // 表格
        "video", // 插入视频
        "code", // 插入代码
        "undo", // 撤销
        "redo" // 重复
      ]),
        (editor.customConfig.pasteFilterStyle = false);
      editor.customConfig.pasteIgnoreImg = false;
      editor.customConfig.uploadImgShowBase64 = true;
      // editor.$textElem.attr('contenteditable', false)
      // editor.attr("disabled","true")
      // 将图片大小限制为 3M
      editor.customConfig.uploadImgMaxSize = 3 * 1024 * 1024;
      // 限制一次最多上传 5 张图片
      editor.customConfig.uploadImgMaxLength = 5;
      editor.customConfig.linkImgCallback = function(url) {
        console.log(url); // url 即插入图片的地址
      };
      var fileData = "";
      editor.customConfig.uploadImgServer = "/test/aaa";
      // this.editor.customConfig.uploadImgServer = this.success();
      editor.customConfig.uploadImgParams = {
        // 如果版本 <=v3.1.0 ，属性值会自动进行 encode ，此处无需 encode
        // 如果版本 >=v3.1.1 ，属性值不会自动 encode ，如有需要自己手动 encode
        token: "abcdef12345",
        file: ''
      };
      editor.customConfig.uploadImgHooks = {
        before: function(xhr, editor, files) {
          // fileData = "123";
          console.log(files);
          editor.customConfig.uploadImgParams.file = files[0].name;
          // 图片上传之前触发
          // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，files 是选择的图片文件

          // 如果返回的结果是 {prevent: true, msg: 'xxxx'} 则表示用户放弃上传
          // return {
          //     prevent: true,
          //     msg: '放弃上传'
          // }
        }
      };

      editor.customConfig.onchange = html => {
        this.editorContent = html;
        console.log(html);
      };
      editor.create();
    },

    getContent: function() {},
    see() {
      this.myDialog = true;
      this.$nextTick(function() {
        this.editPlus();
        $(".w-e-text").attr("contenteditable","false")
        $(".w-e-text").css("background","#fcfcfc")
        // this.editorContent = "fdsafds"
        // this.editor.txt.html('1fdsafdsafds11');
      });
    },
    closeDialog() {
      // editor.destroy();
      $("#editorElem").empty(); //利用jquery的方法对id为"editor"的div清空div中元素。
      this.myDialog = false;
    },
    submitBtn() {
      let data = {
        data: this.editorContent
      };
      this.axios.post("/aaa", data).then(res => {});
    },
    success: function() {
      console.log("dfdsfds");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
