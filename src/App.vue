<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-01 16:51:26
 * @LastEditTime: 2019-11-01 16:51:07
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
