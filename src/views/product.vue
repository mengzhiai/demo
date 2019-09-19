<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-26 13:25:31
 * @LastEditTime: 2019-09-19 11:10:17
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
  </el-form>
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

  <div class="box">

  </div>
</div>
</template>

<script>
import {
  toDate1,
  formatDate,
  formatDateTime,
  threeNumberAPointer
} from '@/utils/common.js'
export default {
  data() {
    return {
      formData: {
        nowDate: '',
        nowTime: ''
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
      ]
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let time = new Date().getTime();
      this.formData.nowDate = formatDateTime(time);
      this.formData.nowTime = time;
      this.formData.money = threeNumberAPointer(10000000)
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
