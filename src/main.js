import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import tabbar from '@/components/Tabbar.vue'
import Qs from 'qs'

// 按需引入vant组件
// Search 搜索栏
import { Search, Cell } from 'vant';
import 'vant/lib/search/index.css';
// NoticeBar通知栏
import { NoticeBar } from 'vant';
import 'vant/lib/notice-bar/index.css';
// Grid宫格
import { Grid, GridItem } from 'vant';
import 'vant/lib/grid/index.css';
import 'vant/lib/grid-item/index.css';
// Icon图标
import { Icon } from 'vant';
// Swipe轮播
import { Swipe, SwipeItem } from 'vant';
import 'vant/lib/swipe/index.css';
import 'vant/lib/swipe-item/index.css';
// Card商品列表
import { Card } from 'vant';
import 'vant/lib/card/index.css'
// Toast轻提示
import { Toast } from 'vant';
import 'vant/lib/toast/index.css'
// Image图形图片
import { Image } from 'vant';
import 'vant/lib/image/index.css'
// Tag标签
import { Tag } from 'vant';
import 'vant/lib/tag/index.css'
// Button按钮
import { Button } from 'vant';
import 'vant/lib/button/index.css'
// Tabbar
import { Tabbar, TabbarItem } from 'vant';
import 'vant/lib/tabbar/index.css';
import 'vant/lib/tabbar-item/index.css';
// TAB
import { Tab, Tabs } from 'vant';
import 'vant/lib/tabs/index.css';
// Slide
import { Sidebar, SidebarItem } from 'vant';
import 'vant/lib/sidebar/index.css';
// Lazyload
import { Lazyload } from 'vant';
// Popup
import { Popup } from 'vant';
import 'vant/lib/popup/index.css';
// Field
import { Field } from 'vant';
import 'vant/lib/field/index.css';
//

Vue.use(tabbar);

// 注册引入的组件
Vue.use(Search);
Vue.use(NoticeBar);
Vue.use(Grid).use(GridItem);
Vue.use(Icon);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Card);
Vue.use(Toast);
Vue.use(Image);
Vue.use(Tag);
Vue.use(Button);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(Tab).use(Tabs);
Vue.use(Sidebar).use(SidebarItem);
Vue.use(Popup);
Vue.use(Field);
Vue.use(Lazyload, {
  lazyComponent: true
});

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;
Vue.prototype.axios = axios;

Vue.use(Qs);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
