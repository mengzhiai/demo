<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-27 14:07:49
 * @LastEditTime: 2019-10-09 13:33:44
 * @LastEditors: Please set LastEditors
 -->
<template>
<div>
  <div id="toolbar-container"></div>
  <!-- 编辑器容器 -->
  <div id="editor">
  </div>
</div>
</template>

<script>
import CKEditor from '@ckeditor/ckeditor5-build-decoupled-document'
import '@ckeditor/ckeditor5-build-decoupled-document/build/translations/zh-cn'
import { getLocalStorage } from '@/utils/localStore'
export default {
  data() {
    return {
      editor: null, //编辑器实例,
      myData: getLocalStorage("testData")
    }
  },
  mounted() {
    console.log(this.myData);
    this.initCKEditor()
  },
  methods: {
    initCKEditor() {
      CKEditor.create(document.querySelector('#editor'), {
        language: 'zh-cn',
        ckfinder: {
          uploadUrl: '/admin/Upload/uploadUrl'
          //后端处理上传逻辑返回json数据,包括uploaded(选项true/false)和url两个字段
        }
      }).then(editor => {
        const toolbarContainer = document.querySelector('#toolbar-container');
        toolbarContainer.appendChild(editor.ui.view.toolbar.element);
        this.editor = editor //将编辑器保存起来，用来随时获取编辑器中的内容等，执行一些操作
      }).catch(error => {
        console.error(error);
      });
    }
  }
}
</script>

<style lang="scss" scoped>
#editor {
  height: 600px;
}
</style>
