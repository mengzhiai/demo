<!--
 * @Author: your name
 * @Date: 2019-08-26 13:46:02
 * @LastEditTime: 2019-11-01 14:34:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo\src\views\login.vue
 -->
<template>
<div>
  <el-table ref="multipleTable" :data="tableData3" tooltip-effect="light" style="width: 100%" @selection-change="handleSelectionChange" stripe border fit highlight-current-row>
    <el-table-column type="selection" width="55" :disable="isdisable"></el-table-column>
    <el-table-column label="日期" width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column prop="name" label="姓名" width="120"></el-table-column>
    <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
  </el-table>
  <div style="margin-top: 20px">
    <el-button @click="toggleSelection(tableData3)">全选</el-button>
    <el-button @click="toggleSelection()" :disabled="multipleSelection.length == 0">取消选择</el-button>
  </div>
  <div class="flex">
    <div>
      <el-divider content-position="left">少年包青天</el-divider>
    </div>
    <div>
      <el-divider content-position="right"><button>fdafds</button></el-divider>
    </div>
  </div>
  <el-badge :value="1" class="item" type="primary">
    <el-button size="small">评论</el-button>
  </el-badge>
  <div class="flex-line">
    <!-- <div class="active-bar" :sytle="{transform: translateX(96px)}"></div> -->
    <!-- <div class="active-bar" :sytle="{transform: 'translateX('+barFocus+'px)'}"></div> -->
    <div class="active-bar" :style="{transform: 'translateX('+barFocus+'px)'}"></div>
    <div :class="activeTab1" class="common-div" @click="clickTab(1)">one<sup class="num">232</sup></div>
    <div :class="activeTab2" class="common-div" @click="clickTab(2)">two<sup>232</sup></div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      barFocus: "",
      activeTab1: "active-col",
      activeTab2: "",
      activeName: 'first',
      tableData3: [{
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      multipleSelection: [],
      isdisable: false,
      arr: [{
          name: '张三1',
          age: 19
        },
        {
          name: '张三1',
          age: 20
        },
        {
          name: '张三2',
          age: 21
        },
        {
          name: '张三2',
          age: 22
        }
      ],
      dataArr: ["张三1", "张三2"]
    };
  },
  mounted() {
    console.log();
    this.getObj();
  },
  methods: {
    //全选,取消选择
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          console.log(this.$refs.multipleTable.toggleRowSelection(row));
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      //val 为选中数据的集合
      this.multipleSelection = val;
    },
    clickTab(val) {
      if (val == 1) {
        this.active1 = "active-col"
        this.active2 = ""
        this.barFocus = "0"
      } else {
        this.active2 = "active-col"
        this.active1 = "";
        this.barFocus = "96"
      }
    },
    getObj() {
      let arr = ["张三1", "张三2"];
      let dataList = [{
          name: '张三1',
          age: 19
        },
        {
          name: '张三1',
          age: 20
        },
        {
          name: '张三2',
          age: 21
        },
        {
          name: '张三2',
          age: 22
        }
      ]
      let objData = {};
      arr.forEach(ele => {
        dataList.forEach(item => {
          if (ele == item.name) {
            if (objData[ele] != undefined) {
              objData[ele].push(item);
            } else {
              objData[ele] = [];
              objData[ele].push(item);
            }
          }
        });
      });
      console.log(objData);
    }
  }
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;

  >div {
    width: 50%;
  }
}

.flex-line {
  text-align: left;
  border-bottom: 2px solid #ccc;
  position: relative;

  .common-div {
    display: inline-block;
    width: 60px;
    cursor: pointer;
    padding: 0 20px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
  }

  .active-col {
    height: 40px;
    line-height: 40px;
    color: #409EFF;
  }

  .active-bar {
    position: absolute;
    top: 44px;
    width: 56px;
    height: 2px;
    background-color: #409EFF;
    transition: transform .3s cubic-bezier(.645, .045, .355, 1), -webkit-transform .3s cubic-bezier(.645, .045, .355, 1);
  }

  .num {
    border-radius: 10px;
    color: #FFF;
    display: inline-block;
    font-size: 12px;
    height: 18px;
    line-height: 18px;
    padding: 0 6px;
    text-align: center;
    white-space: nowrap;
    // border: 1px solid #FFF;
    background-color: #6c62bc;
  }
}
</style>
