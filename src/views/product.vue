<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-26 13:25:31
 * @LastEditTime: 2019-09-04 14:20:50
 * @LastEditors: Please set LastEditors
 -->
<template>
<div>

</div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    ImgtodataURL(url, filename, fileType) {
      this.getBase64(url, fileType, (_baseUrl) => {
        // 创建隐藏的可下载链接
        var eleLink = document.createElement('a');
        eleLink.download = filename;
        eleLink.style.display = 'none';
        // 图片转base64地址
        eleLink.href = _baseUrl;
        // 触发点击
        document.body.appendChild(eleLink);
        eleLink.click();
        // 然后移除
        document.body.removeChild(eleLink);
      });

    },
    getBase64(url, fileType, callback) {
      //通过构造函数来创建的 img 实例，在赋予 src 值后就会立刻下载图片
      var Img = new Image(),
        dataURL = '';
      Img.src = url;
      Img.setAttribute("crossOrigin", 'Anonymous');
      Img.onload = function () { //要先确保图片完整获取到，这是个异步事件
        var canvas = document.createElement("canvas"), //创建canvas元素
          width = Img.width, //确保canvas的尺寸和图片一样
          height = Img.height;
        canvas.width = width;
        canvas.height = height;
        canvas.getContext("2d").drawImage(Img, 0, 0, width, height); //将图片绘制到canvas中
        dataURL = canvas.toDataURL('image/' + fileType); //转换图片为dataURL
        callback ? callback(dataURL) : null;
      };
    },

    downs() {
      var alink = document.createElement("a");
      alink.href = this.shop.shoppic_url;
      alink.download = "pic"; //图片名
      alink.click();
    },

    downloadIamge(imgsrc, name) { //下载图片地址和图片名
      var image = new Image();
      // 解决跨域 Canvas 污染问题
      image.setAttribute("crossOrigin", "anonymous");
      image.onload = function () {
        var canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        var context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, image.width, image.height);
        var url = canvas.toDataURL("image/png"); //得到图片的base64编码数据

        var a = document.createElement("a"); // 生成一个a元素
        var event = new MouseEvent("click"); // 创建一个单击事件
        a.download = name || "photo"; // 设置图片名称
        a.href = url; // 将生成的URL设置为a.href属性
        a.dispatchEvent(event); // 触发a的单击事件
      };
      image.src = imgsrc;
    },
    downs() {
      this.downloadIamge(this.pic.url, 'pic')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
