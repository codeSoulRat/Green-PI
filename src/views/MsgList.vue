<template>
  <div class="msg_tab">
    <message class="msgitem" v-for="(item,i) of datas.data" :key="i" :id="item.id" :title="item.title" :subtitle="item.subtitle" :sendtime="item.time" :imgurl="require(`../assets/img/g${i}.png`)" :itemClick="iclick"></message>
  </div>
</template>
<script>
//1. 引入子组件message.vue
import Message from './Msg'  //后缀可以忽略
//引入json数据文件
import mjson from '@/assets/json/messagelist.json'
export default {
  //2. 注册子组件
  data() {
    return {
      datas:mjson
    }
  },
  components:{
    "message":Message
  }
  // methods:{
  //   iclick:{

  //   }
  // }
}
</script>
<style scoped>
  .msg_tab {
    padding:3rem 1rem 55px 1rem;
    position:relative;
  }
</style>