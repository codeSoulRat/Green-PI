<template>
  <div class="tab1">
    <div>
      <van-tabs>
          <!-- 使用标签组件 -->
          <van-tab title="关注">
            <div slot="default">
              <findcard></findcard>
            </div>
          </van-tab>
          <van-tab title="最新">
            <div slot="default">
              <findcard></findcard>
            </div>
          </van-tab>
          <van-tab title="推荐" icon="apps-o">
            <div slot="icon" name="apps-o"></div>
            <div slot="default">
              <h4>我是456</h4>
            </div>
          </van-tab>
        </van-tabs>
    </div>
    <tabbar></tabbar>
  </div>
</template>
<script>
import FindCard from "./FindCard"
import tabbar from '@/components/Tabbar.vue'
export default {
  data(){
    return{
     activeKey: 0
    }
  },
  components:{
    "findcard":FindCard,
    tabbar
  },

}
</script>
<style scoped>
  .tab1{
    background: #000;
  }
</style>