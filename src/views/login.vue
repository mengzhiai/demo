<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-26 13:46:02
 * @LastEditTime: 2019-08-28 17:46:06
 * @LastEditors: Please set LastEditors
 -->
<template>
<div>
  <canvas id="mountNode" style="width: 100%;"></canvas>
</div>
</template>

<script>
export default {
  data() {
    return {
      chart: null, // 创建一个chart变量
      data: [{
          genre: 'Sports',
          sold: 275
        },
        {
          genre: 'Strategy',
          sold: 115
        },
        {
          genre: 'Action',
          sold: 120
        },
        {
          genre: 'Shooter',
          sold: 350
        },
        {
          genre: 'Other',
          sold: 150
        }
      ]
    }
  },
  mounted() {
    this.msg = 'vue案例'
    // 初始化chart
    const chart = new G2.Chart({
      container: 'mountNode',
      width: 600,
      height: 300
    })
    chart.source(this.data)
    chart
      .interval()
      .position('genre*sold')
      .color('genre')
    this.chart = chart // 将chart变量赋值为vue中的chart, 后面可以直接使用this.chart调用图表对象
    this.chart.render()
  }
}
</script>

<style lang="scss" scoped>

</style>
