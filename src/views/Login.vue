<template>
  <div class="login">
    <div class="inputs">
      <div class="logo">π</div>
      <img class="user" :src="require('../assets/img/user-s.png')" alt="">
      <div class="in">

        <input type="text" v-model="uname" placeholder="请输入用户名">
      </div>
      <img class="key" :src="require('../assets/img/keyss.png')" alt="">
      <div class="in">

        <input type="password"  v-model="upwd" placeholder="请输入密码">
      </div>
    </div>
    <button @click="login">登 录</button>
    <!-- <input type="checkbox" name="notice">
    <label for="notice"></label> -->

    <router-link class="new-user" to="/signup">新用户注册 >></router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      uname:"",
      upwd:"",
    }
  },
  methods:{
    login(){
      /*****用户登录***start*****/
      //1: 创建正则表达式  3~12
      var reg = /^[a-z0-9]{8,16}$/i;
      //2: 获取用户输入 用户名/密码
      var u = this.uname;
      var p = this.upwd;
      // console.log(`${u}_${p}`);
      //3: 验证用户名如果不匹配  提示框
      if(!reg.test(u)){
        this.$toast.fail("用户名格式不正确");
        return;
      }
      //4: 验证密码如果不匹配  提示框
      if(!reg.test(p)){
        this.$toast.fail("密码格式不正确");
        return;
      }
      //5: 发送ajax请求完成登录验证
      var url = 'login';
      var obj = {uname:u,upwd:p};
      this.axios.get(url,{
        params:obj
      }).then(res => {  //成功回调
        // console.log(res);
        if(res.data.code==1){
          //跳转
          this.$toast.success(res.data.msg);
          this.$router.push('/')
        }else{
          this.$toast.fail(res.data.msg);
        }
      }).catch(err => {  //失败回调
        console.log(err);
      })
      //6: 登录成功 跳转商品列表页面
      //7: 登录失败 提示框
    },
  }
}
</script>
<style scoped>
.login {
  width: 100vw;
  height: 100vh;
  background-image: -webkit-linear-gradient(TO bottom, #35497E 0% , #3ED8C4 100%);
  background-image: linear-gradient(TO bottom, #35497E 0% , #3ED8C4 100%);
  display: flex;
  flex-direction: column;
}

.inputs {
  /* padding-top: 10vh; */
}

.logo {
  margin:7vh auto 3vh auto;
  width: 15vh;
  height: 15vh;
  border-radius: 50%;
  line-height: 15vh;
  background-image: -moz-linear-gradient(45deg , #00EF91 , #089EFC);
  background-image: linear-gradient(45deg , #00EF91 , #089EFC);
  color: #fff;
  font-size: 6rem;
  z-index: 9;
}

.inputs .in {
  margin: 0 auto;
}

.inputs>img {
  /* width: 6vh;
  height: 6vh; */
  position: relative;
}

.user {
  width: auto;
  height: 7.5vh;
  top: 9vh;
  left: -34.5vw;
}

.key {
  width: auto;
  height: 6.6vh;
  top: 9vh;
  left: -34.5vw;
}

.inputs>.in input {
  width: 68vw;
  height: 9vh;
  border-radius: 30px;
  border: 1px ridge #3ED8C4;
  outline: 0;
  padding-left: 5rem;
  font-size: 3vh;
}

.login button {
  width: 40vw;
  height: 7vh;
  border: none;
  border-radius: 20px;
  background: #35495E;
  color: #fff;
  font-size: 3vh;
  line-height: 1;
  margin:8vh auto;
}

.new-user {
  margin-top: 9vh;
  color: #fff;
  font-size: 2.5vh;
}
</style>