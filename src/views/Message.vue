<template>
  <div id="msg">
    <!-- titlebar -->
    <titlebar unread="微信(99)" :fdj="require('../assets/img/ic_search.png')" :jh="require('../assets/img/ic_add.png')" :search="mysearch" :add="myadd"></titlebar>
    <!-- 主界面面板 -->
    <msglist></msglist>
    <tabbar></tabbar>
  </div>
</template>
<script>
//引入titlebar子组件
import Titlebar from './Titlebar'
//引入Msglist子组件
import Msglist from './MsgList'
import tabbar from '@/components/Tabbar.vue'

export default {
  data() {
    return {

    }
  },
  //注册titlebar
  components:{
    "titlebar":Titlebar,
    "msglist":Msglist,
    tabbar
  },
  methods:{
    //父组件中添加对应函数,之后在标签内进行绑定
    mysearch() {
      console.log("搜索");
    },
    myadd() {
      console.log("添加");
    }
  }
}
</script>
<style scoped>
#body {
  margin:0;padding:0;
}
</style>