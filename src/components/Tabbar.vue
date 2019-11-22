<template>
  <div id="tabbar">
    <van-tabbar route active-color="#3ED8C4"
    inactive-color="#333">
      <van-tabbar-item
        replace
        to="/"
        icon="home-o">
        出发
      </van-tabbar-item>
      <van-tabbar-item
        replace
        to="/find"
        icon="smile-o">
        探索
      </van-tabbar-item>
      <van-tabbar-item
        replace
        to="/message"
        icon="chat-o">
        π聊
      </van-tabbar-item>
      <van-tabbar-item
        replace
        to="/me"
        icon="contact">
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  }
}
</script>