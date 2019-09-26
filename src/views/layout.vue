<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-20 16:20:07
 * @LastEditTime: 2019-09-20 17:43:17
 * @LastEditors: Please set LastEditors
 -->
<template>
<div>
  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
    <el-radio-button :label="false">展开</el-radio-button>
    <el-radio-button :label="true">收起</el-radio-button>
  </el-radio-group>
  <!-- <el-menu default-active="2-1" class="el-menu-vertical-demo" :open="1-1" @open="handleOpen" @close="handleClose" :collapse="isCollapse" :default-openeds="openeds">
    <el-submenu index="1" class="dddddddddddddddd">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">导航一</span>
      </template>
      <el-menu-item-group class="dddddddddddddd">
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">导航一</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu> -->

  <div class="maxbox">
    <div v-for="(item,i) in menuList" :key="i" class="item" :class="{active: item_i == item.i}" v-on:mouseover="clickItem(item)">
      <div class="menu">{{item.name}}</div>
      <ul class="minbox">
        <li class="" v-for="(list,index) in item.childMenu" :key="index">{{list.childName}}</li>
      </ul>
    </div>
  </div>

</div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true,
      openeds: ['2'],
      uniqueOpened: true,
      flagExpanded: true,
      item_i: 1,
      menuList: [{
          name: 'a',
          i: 1,
          childMenu: [{
              childName: '选项一1'
            },
            {
              childName: '选项二1'
            },
            {
              childName: '选项三1'
            },
            {
              childName: '选项四1'
            }
          ]
        },
        {
          name: 'b',
          i: 2,
          childMenu: [{
              childName: '选项一2'
            },
            {
              childName: '选项二2'
            },
            {
              childName: '选项三2'
            },
            {
              childName: '选项四2'
            }
          ]
        },
        {
          name: 'c',
          i: 3,
        },
        {
          name: 'd',
          i: 4,
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickItem(item) {
      console.log(item.i);
      let data = item;
      this.item_i = data.i;
    }
  }
}
</script>

<style lang="scss" scoped>
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}

.maxbox {
  width: 50px;

  .item {
    background: #ccc;
    border-bottom: 1px solid #fff;
    line-height: 30px;
    position: relative;

    .minbox {
      position: absolute;
      left: 50px;
      top: 0;

      li {
        width: 200px;
      }
    }
  }
  .active {
      background-color: bisque;
    }
}
</style>
