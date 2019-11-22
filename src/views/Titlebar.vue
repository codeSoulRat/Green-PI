<template>
  <div class="titlebar">
    <span>{{unread}}</span>
    <div class="right_pic">  <!--本地子组件图片调试:src="require('路径')"-->
      <img @click="search" class="pic_size" :src="fdj" alt="放大镜">
      <img @click="add" class="pic_size right" :src="jh" alt="加号">
    </div>
  </div>
</template>
<script>
export default {
  props:{
    unread:{default:""},  //左侧消息提示
    fdj:{default:""},  //放大镜图片
    jh:{default:""},  //添加图片
    search:{type:Function},  //放大镜函数
    add:{type:Function}  //添加函数
  },
  data() {
    return {

    }
  }
}
</script>
<style scoped>
/* 最外层的父元素设置弹性布局 */
.titlebar {
  display:flex;
  position:fixed;
  z-index:99;
  width:100%;
  justify-content: space-between;
  height:3rem;
  background-color: #35495E;
  color:#ddd;
  font-size: 1.25rem;
  padding:0 0.5rem;
  align-items: center;
  line-height: 3rem;
}
.right_pic {
  display:flex;
}
.pic_size {
  width:2rem;height:2rem;
}
.pic_size.right {
  margin-left: 1rem;
  margin-right: 1.5rem;
}
</style>