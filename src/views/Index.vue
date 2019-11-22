<template>
  <div>
      <!--Search 搜索-->
      <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round" @search="onSearch">
      <div slot="action" @click="onSearch">搜索</div>
      </van-search>
      <!--NoticeBar 通知栏-->
      <van-notice-bar text="通知内容:欢迎加入绿派,这里有很多有趣的小伙伴哦,一起来一场灵魂之旅吧 ! ! !" scrollable left-icon="volume-o"/>
            <!--Swipe 轮播   纵向滚动-->
      <van-swipe style="height: 200px;" vertical>
        <van-swipe-item><img src="../assets/img/banner1.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="../assets/img/banner2.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="../assets/img/banner3.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="../assets/img/banner4.jpg" alt=""></van-swipe-item>
      </van-swipe>

      <van-grid>
          <van-grid-item icon="coupon-o" text="机票/火车" />
          <van-grid-item icon="friends-o" text="好友" />
          <van-grid-item icon="photo-o" text="分享" />
          <van-grid-item icon="apps-o" text="攻略" />

      </van-grid>
      <h4 class="title">一些有趣的人:</h4>
      <br>
      <br>
      <!--可能感兴趣的人-->
      <div  class="interesting">
        <div>
          <van-image class="like" round  width="4rem"  height="4rem"  src="https://img.yzcdn.cn/vant/cat.jpeg"/>
        </div>
        <div>
          <h4 class="name">马明真</h4>
          <br>
          <br>
          <div class="tag">
            <van-tag plain type="primary">济南</van-tag>
            <van-tag plain type="success">90后</van-tag>
          </div>
          <div class="but">
            <van-button icon="like-o" />
            <van-button icon="cross" />
          </div>
        </div>
          <div>
            <van-image class="like" round width="4rem" height="4rem" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
          </div>
        <div>
          <h4 class="name">马明真</h4>
          <br>
          <br>
          <div class="tag">
            <van-tag plain type="primary">济南</van-tag>
            <van-tag plain type="success">90后</van-tag>
          </div>
          <div class="but">
            <van-button icon="like-o" />
            <van-button icon="cross" />
          </div>
        </div>
      </div>

      <h4 class="title">一些有趣的地方:</h4>
      <div v-for="(item, i) in list" :key="i" class="img">
        <h2 class="word">asds sadas ass</h2>
        <img :src="require(`../assets/img/${i+1}.jpg`)">
      </div>
      <tabbar></tabbar>
  </div>
</template>
<script>
import indexCard from '../assets/json/indexCard.json'
import tabbar from '@/components/Tabbar.vue'
export default {
  data() {
    return {
      list:indexCard
    }
  },
  components:{
    tabbar
  }
}
</script>
<style scoped>
.word{
  margin:0 auto;
  position: relative; /*脱离文档流*/
  top: 45%; /*偏移*/
  color:#FFF;
  padding-top:0;
}
    /*推荐旅游*/
  .img{

    margin-top:5px;
    width:370px;
    height:212px;
    overflow:hidden;
    border-radius:0.5rem;
  }
  /*有趣的人 */
  .interesting{
      background: #fff;
      opacity: 0.4;
  }
  /*"可能感兴趣的人"*/
  .title{
    padding:0;
    margin:0;
    float:left;
  }
  /*推荐好友右下角*/
  .but{
    height:40px;
  }
  /*推荐好友标签*/
  .tag{
    float:left;
    margin-left:10px;
  }
  /* 推荐好友昵称*/
  .name{
    margin:0;
    margin-left:10px;
    padding:0;
    float:left;
  }
  /*推荐好友头像*/
  .like{
    float:left;
    margin-left:20px;
  }
</style>
