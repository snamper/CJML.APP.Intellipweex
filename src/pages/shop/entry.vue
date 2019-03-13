<template>
  <div>
    <div>
        <slider class="slider" interval="3000" auto-play="true" >
            <div class="frame" :key="index"  v-for="(img,index) in imageList">
                <image class="image" resize="cover" :src="img.src" />
            </div>
            <indicator class="indicator"></indicator>
        </slider>
    </div>
    <div class="shop_tab">
      <text :class="[curtabindex===0?'tab_item_cur':'tab_item']" @click="tabclick(0)">下单</text>
      <text :class="[curtabindex===1?'tab_item_cur':'tab_item']" @click="tabclick(1)">我的订单</text>
    </div>
    <!-- <div v-if="curtabindex===0"> -->
      <div class="content-title" v-if="curtabindex===0">  
          <div class="content-item" style="margin-right:30px;">
            <div class="content-title-icon"><image class="content-title-image" src="/src/assets/images/icon_convenient.png"/></div>
            <div class="content-title-text">
              <text class="content-title-main">便捷下单</text>
              <text class="content-title-vice">拍照/语单</text>
            </div>
          </div>
        <div class="content-item">
          <div class="content-title-icon"><image class="content-title-image" src="/src/assets/images/icon_recommend.png"/></div>
          <div class="content-title-text">
            <text class="content-title-main">智能下单</text>
            <text class="content-title-vice">按历史进货</text>
          </div>
        </div>
      </div>
      <shopitemlist v-if="curtabindex===0"></shopitemlist>
      
    <!-- </div> -->
    <div v-if="curtabindex===1">
      <orderlist></orderlist>
    </div> 
</div>
</template>

<script>
import shopitemlist from '../../components/shop/shopitemlist.vue'
import orderlist from '../../components/order/orderlist.vue'
import {fetch} from '../../utils/index.js';
const modal = weex.requireModule('modal');
export default {
  components: {
    shopitemlist,
    orderlist
  },
  data() {
    return {
      imageList: [
        {
          src: "http://v.cjmltest.cn/themes/default/images/login/logo.gif"
        },
        {
          src: "http://v.cjmltest.cn/themes/default/images/login/logo.gif"
        },
        {
          src: "http://v.cjmltest.cn/themes/default/images/login/logo.gif"
        }
      ],
      curtabindex:1,
      shopinfo:null
    };
  },
  created() {
    // console.log(process.env.apiDomain);
    this.GetUserDistrictIdShop();
  },
  methods: {
    tabclick(tabindex){
      this.curtabindex=tabindex;
    },
    GetUserDistrictIdShop(){
      var self=this;
      fetch({
        url:'/api/Purchase/GetUserDistrictIdShop',
        method:'POST',
        body:{},
        type:'json',
        success:function(res){
          self.shopinfo = res;
          // console.log(res);
        }
      });
    }
  }
};
</script>

<style scoped>
.weex-div{background-color: white;}
.shop_tab{
  flex-direction: row;
  margin-top: 32px;
  margin-left: 30px;
  border-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #eeeeee;
}
.tab_item{
  font-size: 24px;
  line-height: 36px;
  color: #e74c3c;
  margin-right: 40px;
  padding:16 10px;
}
.tab_item_cur{
  font-size: 24px;
  line-height: 36px;
  color: #e74c3c;
  margin-right: 40px;
  padding:16 10px;
  border-style: solid;
  border-bottom-width: 4px;
  border-bottom-color: #e74c3c;
}
.content-title{
  margin:30px auto;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.content-item{
  flex-direction: row;
  width: 330px;
  float:left;
  height: 108px;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  border-radius:6px
}
.content-title-text{
  flex-direction: column;
  margin-left: 24px;
}
.content-title-icon{
  width: 48px;
}
.content-title-main{
  color: #181818;
  font-size: 28px;
  line-height: 36px;
  background-color: #fafafa;
}
.content-title-vice{
  color:#acacac;
  font-size: 21px;
  line-height: 30px;
  margin-top:6px;
  background-color: #fafafa;
}
.content-title-image{
  width: 48px;
  height: 48px;
  margin-right: 24px;
}
.image {
  width: 690px;
  height: 168px;
}
.slider {
  margin-top: 30px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 18px;
  width: 690px;
  height: 168px;
  background-color: #ffffff;
}
.frame {
  width: 690px;
  height: 168px;
  position: relative;
}
.indicator {
  width: 690px;
  height: 168px;
  item-color: #ffffffff;
  item-selected-color: red;
  size: 10px;
  top: 50px;
  position: absolute;
}

.item-container {
  width: 750px;
  background-color: #f2f3f4;
}

.border-cell {
  background-color: #f2f3f4;
  width: 750px;
  height: 24px;
  align-items: center;
  justify-content: center;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: #e0e0e0;
}
.tab_content{display:none;}
.tab_content_cur{display: block;}
.cell {
  background-color: #ffffff;
}
</style>