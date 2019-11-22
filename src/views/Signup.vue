<template>
  <div class="sign">
    <div class="inputs">
      <div class="logo">π</div>
      <img class="user" :src="require('../assets/img/user-s.png')" alt="">
      <div class="in">
        <input v-model="uname" type="text" placeholder="请输入用户名">
      </div>
      <img class="key" :src="require('../assets/img/keyss.png')" alt="">
      <div class="in">
        <input v-model="upwd" type="password" placeholder="请输入密码">
      </div>
      <img class="rekey" :src="require('../assets/img/keyss.png')" alt="">
      <div class="in">
        <input v-model="repwd" type="password" placeholder="请重复密码">
      </div>
    </div>
    <button @click="signup">注册</button>
    <!-- <input type="checkbox" name="notice">
    <label for="notice"></label> -->

    <router-link class="new-user" to="/login">已有账号直接登录 >></router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      uname:"",
      upwd:"",
      repwd:""
    }
  },
  methods:{
    signup(){
      /* 格式验证 start */
      var reg = /^[a-z0-9]{8,16}$/i;
      var u = this.uname;
      var p = this.upwd;
      var r = this.repwd;
      if(p!=r){
        this.$toast.fail("两次密码不一致");
        return;
      }
      if(!reg.test(u)){
        this.$toast.fail("用户名格式不正确");
        return;
      }
      if(!reg.test(p)){
        this.$toast.fail("密码格式不正确");
        return;
      }
      console.log(u);
      var url = 'signup';
      this.axios.post(
        url,
        this.Qs.stringify({
          uname:u,
          upwd:p
        })
      ).then(res=>{
        if(res.data.code==1){
          this.$toast.success("注册成功!");
          this.$router.push('/');
        }else{
          this.$toast.fail(`${result.data.msg}`);
        }
      })
    }
  }

}
</script>
<style scoped>
.sign {
  width: 100vw;
  height: 100vh;
  background-image: -webkit-linear-gradient(TO bottom, #35497E 0% , #3ED8C4 100%);
  background-image: linear-gradient(TO bottom, #35497E 0% , #3ED8C4 100%);
  display: flex;
  flex-direction: column;
}

.logo {
  margin:7vh auto;
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

.inputs {
  /* padding-top: 20vh; */
}

.inputs .in {
  margin: 3vh auto;
}

.inputs>img {
  /* width: 6vh;
  height: 6vh; */
  position: fixed;
}

.user {
  width: auto;
  height: 7.5vh;
  top: 29.5vh;
  left: 12vw;
}

.key {
  width: auto;
  height: 6.6vh;
  top: 43vh;
  left: 12vw;
}

.rekey {
  width: auto;
  height: 6.6vh;
  top: 55.5vh;
  left: 12vw;
}

.inputs>.in input {
  width: 65vw;
  height: 9vh;
  border-radius: 30px;
  border: 1px ridge #3ED8C4;
  outline: 0;
  padding-left: 5rem;
  font-size: 3vh;
}

.sign button {
  width: 40vw;
  height: 7vh;
  border: none;
  border-radius: 20px;
  background: #35495E;
  color: #fff;
  font-size: 3vh;
  line-height: 1;
  margin:4vh auto 0 auto;
}

.new-user {
  margin-top: 13vh;
  color: #fff;
  font-size: 2.5vh;
}
</style>