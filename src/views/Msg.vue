<template>
  <div class="rootstyle" @click="iClick(id)">
    <!--h3>Message.vue 消息组件</h3-->
    <div class="leftimgandlablestyle">
      <img
      :src="imgurl" alt="" class="imgstyle">
      <div class="rightOfImg">
        <span class="titleable">
          {{title}}
        </span>
        <span class="subtitle">
          {{subtitle}}
        </span>
      </div>
    </div>
    <span class="sendtime">
      {{sendtime}}
    </span>
  </div>
</template>
<script>
export default {
  props:{
    //接收父元素数据
    id:{default:""},
    imgurl:{default:""},
    title:{type:String,default:""},
    subtitle:{type:String,default:""},
    sendtime:{type:String,default:""},
    itemClick:{type:Function}
  }
}
</script>
<style scoped>
/*message 根样式*/
.rootstyle{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin:0 0 0.25rem 0;
  padding:0.25rem 0 0.5rem 0;
  border-bottom: 1px solid #999;
}
/*图片的样式*/
.imgstyle{
  width:50px;
  height:50px;
}
/*包裹着图片和文本元素*/
.leftimgandlablestyle{
   display: flex;
}
/*图片右侧文本*/
.rightOfImg{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left:7px;
}
/*主标题*/
.titleable{
  color:#000;
  font-weight: bold;
  font-size:17px;
  text-align: left;
}
/*子标题*/
.subtitle{
  color:gray;
  margin-top:4px;
  border-bottom: 1xp solid #999;
  overflow:hidden;
  white-space:nowrap;
  text-overflow:ellipsis;
}
/*消息发送时间*/
.sendtime{
  /*定义flex子元素在纵轴对方式*/
  /*flex-start 元素位于容器开头*/
  align-self: flex-start;
  color:gray;
}
</style>