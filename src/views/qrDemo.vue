<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-05 09:43:27
 * @LastEditTime: 2019-11-04 16:57:15
 * @LastEditors: Please set LastEditors
 -->
<template>
<div>
  <el-form :model="formData" ref="formData" :rules="rules" label-width="80px">
    <el-form-item label="数量">
      <el-input v-model="formData.number" @oninput=inputFun maxlength="10"></el-input>
    </el-form-item>
    <el-form-item label="数量">
      <el-input v-model="formData.number" @keyup.native="number" maxlength="6"></el-input>
    </el-form-item>
    <el-form-item label="姓名" prop="name">
      <el-input v-model="formData.name" placeholder=""></el-input>
    </el-form-item>
    <el-form-item label="类型" prop="type">
      <el-input v-model="formData.type" placeholder=""></el-input>
    </el-form-item>
    <el-form-item label="类型" prop="sel">
      <el-select v-model="formData.sel" placeholder="">
        <el-option label="aaa" value="111"></el-option>
        <el-option label="bbb" value="222"></el-option>
        <el-option label="ccc" value="333"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="金额" prop="money">
      <el-input v-model="formData.money" placeholder=""></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" size="medium" @click="clickBtn">提交</el-button>
    </el-form-item>
  </el-form>
  {{nowNumber}}
  <el-button type="success" size="small" @click="reduce">减</el-button>
  <el-button type="success" size="small" @click="add">加</el-button>
</div>
</template>

<script>
import rules from "@/utils/rules.js"
import {
  log,
  threeNumberAPointer,
  toMoneyStr,
  currency
} from "@/utils/common.js"
export default {
  data() {
    return {
      formData: {
        number: ''
      },
      rules: {
        number: [{
            required: true,
            // validator: rules.FormValidate.Form().validateNumber,
            max: 10,
            message: '此项为必填',
            trigger: 'blur'
          },
          {
            required: true,
            message: '此项为必填',
            trigger: 'blur'
          },
          {
            max: 10,
            message: '不能超过十位',
            trigger: 'blur'
          },
        ],
        name: [{
          required: false,
          validator: rules.FormValidate.Form().validateStr,
          trigger: 'blur'
        }],
        type: [{
          required: true,
          validator: rules.FormValidate.Form().validateStrMust,
          trigger: 'blur'
        }, ],
        sel: [{
          required: true,
          message: '请选择下拉框',
          trigger: 'change'
        }, ],
        money: [{
          required: false,
          validator: rules.FormValidate.Form().validateMoney,
          trigger: 'change'
        }, ]
      },
      arr: [{
          name: 'aaa',
          age: 20
        },
        {
          name: 'bbb',
          age: 20
        },
        {
          name: 'aaa',
          age: 40
        }
      ],
      // nowNumber: null
    }
  },
  watch: {
    /* formData: {
      handler: function (val) {
        this.formData.number = val.number.toUpperCase();
        this.formData.number = currency(val.number)
      },
      deep: true
    } */
    /* nowNumber(val) {
      console.log('val', val);
      console.log($store.state.count);
      if (val != 1) {
        console.log('aaa');
      }
    } */
    nowNumber(val) {
      console.log(val);
    }
  },
  computed: {
    nowNumber() {
      return this.$store.state.count;
    },

    //监听form中的值
    userInfo: {
      handler: function (val) {
        this.userInfo.nickName = val.nickName.toUpperCase()
      },
      deep: true
    },
    
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      var arr = [{
          name: "李一",
          num: "0001",
          age: 40,
          sex: "男",
          count: 20
        },
        {
          name: "王一",
          num: "0002",
          age: 32,
          sex: "女",
          count: 20
        },
        {
          name: "赵一",
          num: "0001",
          age: 30,
          sex: "男",
          count: 41
        },
        {
          name: "何一",
          num: "0001",
          age: 40,
          sex: "男",
          count: 25
        }
    ]
      let sumTotal = 0;
      for(var i=0; i< arr.length;i++){
        sumTotal += arr[i].count
      }
      console.log(sumTotal);
    },
    clickBtn() {
      /* let data = {
        number: 111
      }
      this.axios.post('/aaa', data).then(res => {

      }) */
      let count = 0;
      this.arr.forEach(item => {
        count += item.age;
      });
      console.log(count);
    },

    handleClick() {
      this.num = this.num.replace(/[^\w]/g, '');
    },
    number() {
      this.famount = this.famount.replace(/[^\.\d]/g, '');
      this.famount = this.famount.replace('.', '');
    },
    inputFun() {
      this.formData.number = "value=value.replace(/[^0-9.]/g,'')";
    },
    add() {
      this.$store.commit('add');
      // this.nowNumber = this.$store.state.count;
    },
    reduce() {
      this.$store.commit('reduce');
      // this.nowNumber = this.$store.state.count;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
