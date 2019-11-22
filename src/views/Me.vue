<template>
<div class="me">
  <div class="d1" id="d">
    <div class="d1-son">
      <van-icon name="flower-o" dot size="30px"  color="#eee"/>
      <van-icon name="coupon-o" info="9" size="30px"  color="#eee"/>
      <van-icon name="setting-o" size="30px"  color="#eee" />
    </div>
  </div>

  <div class="d2">
    <div class="me">
      <div class="me-info">
        <div class="me-leftside">
          <van-image round width="5rem" height="5rem" :src="require('../assets/img/cat.jpg')"/>
        </div>
        <h3 class="me-leftside">用户名</h3>
        <p class="me-leftside username">绿π号:*******</p>
        <p class="me-leftside sign">简介:每天都不一样的生活</p>
        <div class="d3">
          <van-tag  round type="success">90后</van-tag>
          <van-tag  round type="success">星座</van-tag>
          <van-tag  round type="success">地址</van-tag>
          <van-tag  round>编写资料</van-tag>
        </div>
      </div>

      <div class="d4">
        <div>
          <span>0</span>
          <span>动态</span>
        </div>
        <div>
          <span>0</span>
          <span>粉丝</span>
        </div>
        <div>
          <span>0</span>
          <span>动态</span>
        </div>
        <div>
          <span>abc13</span>
          <span>邀请码</span>
        </div>
        <div class="right-side">
          <van-icon name="qr"  />
        </div>
      </div>

    </div>
    <div class="me-tabs">
      <van-tabs v-model="active">
        <van-tab  name="a">
          <div slot="title">
            <img src="../assets/img/zp.png">作品
          </div>
        </van-tab>
        <van-tab  name="b">
          <div slot="title">
            <img src="../assets/img/x.png">关注
          </div>
        </van-tab>
        <van-tab  name="c">
          <div slot="title">
            <img src="../assets/img/gy.png">@你
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
  <tabbar></tabbar>
</div>
</template>
<script>
import tabbar from '@/components/Tabbar.vue'
export default {
  data() {
    return {

    }
  },
  components:{
    tabbar
  }
}
</script>
<style>
  .d1{
    background-color:#35495e;
    width:100%;
    height:80px;

  }
  .d1-son{
    padding-left:240px;
    padding-top:20px;
    display:flex;
    width:110px;
    height:40px;
    justify-content:space-between;
  }
  .d2{
    position:relative;
  }
  .me{

  }
  .me-tabs{

  }
  .me-leftside{
    text-align: left;
    padding-left:20px;
    margin:0;
  }
  .me-leftside.username{
    font-size:5px;
    color: #bbbbbb;
  }
  .me-leftside.sign{
    font-size:10px;
  }
  .d3{
    text-align: left;
    padding-left:20px;
    margin-left:2;
  }
  .d4{
    width: 100%;
  }
  .d4,.d4>div{
    display: flex;
  }
  .d4>div{
    width:40px;
    flex-direction: column;
  }
  .right-side{
    align-self: flex-end;
  }
</style>