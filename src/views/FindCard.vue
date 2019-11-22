<template>
<div class="findcard">
  <div v-for="(item,i) of list" :key="i" class="crd">
  <div>
    <div>
      <van-image round width="2.5rem" height="2.5rem" :src="require(`../assets/img/tx${i+1}.jpg`)" class="image1"/>
    </div>
    <div><h5 class="bt1">{{item.name}}</h5></div>
  </div>
  <div>
<div class="van-multi-ellipsis--l2">{{item.subtitle}}</div>
  <lazy-component @show="handler">
        <img :src="require(`../assets/img/xt/xt${i+1}.png`)" class="crd1">
  </lazy-component> 
<div class="icon1">
  <van-icon name="like-o"  size="25px" style="margin-left:10px"/>
  <van-icon @click="showPopup" name="smile-comment-o" size="25px" style="margin-left:30px"/>
  <van-icon name="share" size="25px" style="margin-left:150px"/>
</div>
</div>
</div>
<div>
<van-popup
v-model="show" 
round
position="bottom"
:style="{ height: '50%' }"
>

<van-cell-group>
  <van-field class="pl2" v-model="value" placeholder="评论一下....✎✎✎" style="position:fixed; bottom:2px;; height:27px; "/>
</van-cell-group>
</van-popup>      
</div>

</div>


</template>
<script>
import cardlist from "../assets/json/cardlist.json"
import FindDetails from "./FindDetails"
export default {
data() {
return {
list:cardlist,
show: false
}
},
methods: {
handler (component) {

},
showPopup() {
this.show = true;
}
}
}
</script>

<style scoped>
*{padding: 0;margin: 0}
.findcard{
display: flex;/*弹性布局*/
flex-wrap: wrap;/*子元素换行*/
/*两端对齐*/
justify-content: space-between;
background: #fff;
overflow: hidden;
padding: 0 5px;
}
.crd{
width:100%;/*指定宽度*/
height:317px;/*高度*/
border:1px solid #fff;/*边框*/
border-radius: 5px;/*圆角*/
margin:1px 0;/*外边框*/
padding:1px;/*内边距 42 */
/*重新计算盒子模型*/
box-sizing: border-box;
display: flex;/*弹性布局*/
flex-direction: column;
min-height: 257px;
margin-top:8px;
box-shadow: 0 0 10px #ccc;
padding-bottom:20px ;
}
.crd1{
width:100%;
height: 209px;
/* margin: 0px; */

}
.image1{
float: left;
}

.bt1{

margin-top: 9px;
margin-left:4px;
margin-bottom: 0px;
float: left;
}
.van-multi-ellipsis--l2{
font-size: 12px;
text-align: left;

}
.icon1{
float: left;
margin-bottom: 5px;

}
.pl2{
  box-shadow: 0 0 7px #333;
}
</style>