<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-17 16:13:12
 * @LastEditTime: 2019-10-17 17:19:07
 * @LastEditors: Please set LastEditors
 -->
<template>
<div>

</div>
</template>

<script>
import { uniqueArr } from '@/utils/common'
export default {
  data() {
    return {

    }
  },
  mounted() {
    // this.init();
    this.setData();
  },
  methods: {
    init() {
      let arr = [{
          name: 'a',
          id: 1
        },
        {
          name: 'b',
          id: 2
        },
        {
          name: 'c',
          id: 3
        },
        {
          name: 'c',
          id: 3
        }
      ]
      let arr2 = [1,2,3,1,2,3];
      let obj = {a:1,b:2,c:3};
      const set = new Set(arr);
      console.log(Array.from(new Set(arr2)));

      let newArr = [];
      for (const key in obj) {
        let obj1 = {};
        obj1.key = key;
        obj1.val = obj[key];
        newArr.push(obj1);
      }
      console.log(newArr);
    },
    setData(){
      let arrs = new Set([1,2,3,4,5,1,2,3]);
      // console.log(unArr(arrs));
      for (const iterator of arrs) {
        console.log(iterator);
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
