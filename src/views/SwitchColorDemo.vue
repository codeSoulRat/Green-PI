<template>
	<div id="home">
    <div class="box" :class="{isVue:isVue}">
  	</div>
    <button @click="switchColor">点此切换颜色</button>
  </div>
</template>
<script>
export default {
	data(){
		return {
			isVue:false,
		}
	},
  methods:{
    switchColor(e){
      this.isVue = !this.isVue;
    }
  }
}
</script>
<style scoped>
  .box {
    width:200px;
    height:200px;
    background:red;
  }
  .isVue {
    background:#41B883;
  }
</style>
