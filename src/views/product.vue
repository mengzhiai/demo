<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-26 13:25:31
 * @LastEditTime: 2019-10-21 09:43:29
 * @LastEditors: Please set LastEditors
 -->
<template>
<div>
  <el-form :model="formData" ref="formData" label-width="80px">
    <el-form-item label="">
      <el-input v-model="formData.nowDate"></el-input>
    </el-form-item>
    <el-form-item label="">
      <el-date-picker v-model="formData.nowTime" type="date" format="yyyy-MM-dd HH:mm" placeholder="选择日期">
      </el-date-picker>
    </el-form-item>
    <el-form-item>
      {{formData.money}}
    </el-form-item>
    <el-form-item>
      <el-input v-model="formData.moneyTest" placeholder=""></el-input>
    </el-form-item>
    <el-form-item>
      <el-input v-model="formData.money3" placeholder=""></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitBtn">提交</el-button>
    </el-form-item>
  </el-form>
  <div>
    <span>头上一片晴天，心中一个想念</span>
    <el-divider content-position="left">少年包青天</el-divider>
    <span>饿了别叫妈, 叫饿了么</span>
    <el-divider><i class="el-icon-mobile-phone"></i></el-divider>
    <span>为了无法计算的价值</span>
    <el-divider content-position="right">阿里云</el-divider>
  </div>
  <input type="text" v-model="testInput" disabled>
  <el-radio-group v-model="radio" @change="radioChange(radio)">
    <el-row>
      <el-col :span="12">
    <el-radio :label="3">备选项</el-radio>

      </el-col>
      <el-col :span="12">
    <el-radio :label="6">备选项</el-radio>

      </el-col>
    </el-row>
  </el-radio-group>
  <el-dialog title="" :visible.sync="testDialog" width="30%">
    <el-table :data="tableData" border stripe>
      <el-table-column label="账号">
        <template slot-scope="scope">
          <div>
            <!-- <span>{{scope.row.name}}</span> -->
            <el-popover placement="top-start" title="标题" width="200" trigger="hover" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
              <!-- <el-button slot="reference">hover 激活</el-button> -->
              <el-table :data="tableData" border stripe>
                <el-table-column label="name" prop="name">
                </el-table-column>
                <el-table-column label="age" prop="age">
                </el-table-column>
              </el-table>

              <span slot="reference">{{scope.row.name}}</span>
            </el-popover>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="age">
        <template slot-scope="scope">
          <div>
            <span>{{scope.row.age}}</span>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </el-dialog>
  <el-table :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
    <el-table-column type="selection" :selectable='checkboxIndex' width="55" />
    <el-table-column prop="date" label="日期" width="180">
    </el-table-column>
    <el-table-column prop="name" label="姓名" width="180">
    </el-table-column>
    <el-table-column prop="address" label="地址">
    </el-table-column>
    <el-table-column prop="age" label="地址">
    </el-table-column>
  </el-table>
  <div class="box">

  </div>
</div>
</template>

<script>
import {
  formatDate,
  formatDateTime,
  threeNumberAPointer,
  moneyNum,
  toMoneyStr,
  postMoney,
  baseUrl
} from '@/utils/common.js'
export default {
  data() {
    return {
      formData: {
        nowDate: '',
        nowTime: '',
        money: toMoneyStr(1000),
        moneyTest: 0.07,
        money3: 3
      },
      testDialog: false,
      tableData: [{
          name: "fdsafdsaf",
          age: 30
        },
        {
          name: "fdsafdsaf",
          age: 30
        },
        {
          name: "fdsafdsaf",
          age: 30
        }
      ],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        age: 19
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        age: 18
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        age: 18
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        age: -1
      }],
      testInput: 'fdsafds',
      radio: 3
    }
  },
  mounted() {
    console.log(this.testInput);
    this.init();
  },
  methods: {
    radioChange(val){
      console.log(val);
    },
    init() {
      let time = new Date().getTime();
      this.formData.nowDate = formatDate(time);
      this.formData.nowTime = time;
      // this.formData.money = threeNumberAPointer(10000000)
      // this.formData.money = 10000000;
    },
    submitBtn() {
      let data = {
        // money1: postMoney(this.formData.moneyTest + this.formData.money3),
        money1: (postMoney(this.formData.moneyTest) + postMoney(this.formData.money3)),
        money2: postMoney(this.formData.money)
      }
      this.axios.post('./aaa', data).then(res => {

      })
    },
    handleSelectionChange(data) {
      console.log(data);
    },
    /* handleSelectionChange(data){
      let arr = [];
      data.forEach(item=>{
        if(item.age < 0){
          this.$message.error("aaa");
          return;
        }else{
          arr.push(item);
        }
      })
    } */
    checkboxIndex(row) {
      if (row.age < 0) {
        return 0;
      } else {
        return 1;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  width: 100px;
  height: 100px;
  background-color: #ccc;
}
</style>
