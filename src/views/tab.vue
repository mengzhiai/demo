<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-19 09:39:45
 * @LastEditTime: 2019-08-21 09:42:20
 * @LastEditors: Please set LastEditors
 -->
<template>
<div>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
  <el-button type="success" @click="exportBtn">导出</el-button>
</div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first"
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.axios.get('https://easy-mock.com/mock/5d5c9eea08d4e3367f21028b/oa/word')
        .then(res => {
          if (res) {
            this.exportBtn(this.res.data.data)
          } else {
            this.$message({
              type: "error",
              message: "导出失败"
            })
          }
        })
    },
    exportBtn() {
      let blob = new Blob([res.data.data.txt], {
        type: `application/msword` //word文档为msword,pdf文档为pdf，msexcel 为excel
      });
      let objectUrl = URL.createObjectURL(blob);
      let link = document.createElement("a");
      let fname = `我的文档.doc`; //下载文件的名字+后缀名
      link.href = objectUrl;
      link.setAttribute("download", fname);
      document.body.appendChild(link);
      link.click();
    },
    handleClick(tab, event) {
      console.log(tab.name);
      this.init()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
