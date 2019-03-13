<template>
      <scroller class="content" offset-accuracy="300" loadmoreoffset="300" @loadmore="onloadmore">
          <refresher @loadingDown="loadingDown"></refresher>
           <div class="content-box-div" v-for="(item,index) in orderlist" :key="index" @click="goOrderDetail(item.url)" v-if="orderlist.length>0">
                <div class="content-box1">
                 <div class="content-box-text-2">
                 <text  class="content-box-text-3">{{item.shopName}}</text>  <text class="content-box-text-4">{{item.createTime}}</text>
                 </div>
                 <div class="content-box-text">
                     <div class="content-box-text-t1">
                         <div class="content-img"><image class="img" style="width: 78px; height: 78px;border-radius: 0.16rem;" :src="item.autoLogo"/></div>
                         <div class="content-car">
                             <div class="content-carname">{{item.autoInfo}}</div>
                             <div class="content-vin">{{item.vinCode}}</div>
                         </div>
                     </div>
                     <!-- <text class="content-box-text1">宝马 535i(F10 LCI 2013-)(进口)3.0T</text> -->
                </div>
                 <div class="content-shop">
                  <text  class="content-shop-text">共 {{item.wareCount}} 件商品 参考总价： ￥{{item.payaAmount}}</text>  
                 </div>
                 <div class="content-box-text-5">
                     <div class="content-box-text-7">
                     <text class="text3">{{item.orderStatusName}}</text>
<image class="img" style="width: 14px; height: 24px; margin-left: 16px;margin-top: 18px; " src="/src/assets/images/arrow_rightGrey.png" ></image>
                     </div>
                    <a class="content-box-text-6">
                       <text class="text2">联系商家</text>   
                    </a>
                 </div>
              </div>
           </div>
           <div v-if="orderlist.length==0" class="orderDataNo">
             <image src="/src/assets/images/pic_historicalOrderDataNo.png" style="width:216px;height:184px;"/>
            <text class="orderDataNo-text">暂无订单</text>
           </div>
           <loading class="loading" @loading="onloading" :display="showLoading">
              <text class="indicator">{{loading}}</text>
          </loading>
      </scroller>
</template>
<script>
const modal = weex.requireModule("modal");
const eventModule = weex.requireModule('event');
import refresher from '../../components/refresh.vue';
import {fetch} from '../../utils/index.js';
export default {
  components: {
      'refresher': refresher
  },
  data() {
    return {
      showLoading: 'hide',
      orderlist:[],
      pageNum:1,
      pageSize:5,
      pageCount:0,
      loading:'加载更多...'
    };
  },
  props: {
      cloudShopId:0
  },
  created() {
    this.GetShopCustomerOrder();
  },
  methods: {
    onloading(event) {
      this.showLoading = 'show';
      setTimeout(() => {
          this.showLoading = 'hide'
      }, 300)
    },
    onloadmore(event){
      this.pageNum++;
      if(this.pageNum>this.pageCount)
      {
        this.loading='到底了...';
      }else{
        setTimeout(() => {
          this.GetShopCustomerOrder();
        }, 100)
      }
    },
    loadingDown(event) {
      this.showLoading = 'hide'
      this.pageNum=1;
      this.GetShopCustomerOrder('replace');
    },
    GetShopCustomerOrder(action){
      var self=this;
      fetch({
        url:'/api/UserCenter/GetShopCustomerOrder',
        method:'POST',
        body:{
          cloudShopId:self.cloudShopId,
          pageNum:self.pageNum,
          pageSize:self.pageSize
        },
        type:'json',
        success:function(res){
          if(res.order && res.order.length>0)
          {
            self.pageCount = res.totalCount%self.pageSize==0?res.totalCount/self.pageSize:res.totalCount/self.pageSize+1;
            if(action=='replace'){
              self.orderlist=[];
            }
            self.orderlist.push(...res.order);
          }
        }
      });
    },
    goOrderDetail(url){
      console.log(url);
      eventModule.openWebURL(url);
    },
    phoneCall: function (tel) {
      var navigator = weex.requireModule('navigator')
      navigator.push({
        url: 'tel://' + tel,
        animated: "true"
      });
    }
  }
};
</script>
<style scoped>
.loading {
  width: 750px;
  display: -ms-flex;
  display: -webkit-flex;
  display: flex;
  -ms-flex-align: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  align-items: center;
}
.indicator {
  margin-top: 16px;
  height: 40px;
  width: 750px;
  color:#8c8c8c;
  text-align: center;
}

.content-box-text-t1 {
  flex-direction: row;
}

.content-img {
  border-radius: 12px;
  margin-top: 24px;
  margin-left: 24px;
  background-color: #ffffff;
  width: 78px;
  height: 78px;
  margin-bottom: 24px;
}

.content-car {
  margin-top: 16px;
}
.content-vin {
  font-size: 24px;
  line-height: 48px;
  margin-left: 24px;
  color: #999999;
}
.content-carname {
  font-size: 28px;
  line-height: 48px;
  margin-left: 24px;
}
.text {
  direction: rtl;
  font-size: 24px;
  line-height: 30px;
  background-color: #d53833;
  color: #ffffff;
  width: 150px;
  border-radius: 9px;
  border-width: 1px;
  border-color: #d53833;
  margin-bottom: 16px;
  padding-top: 16px;
  padding-bottom: 10px;
  margin-right: 24px;
  justify-content: center;
  text-align: center;
}

.text3 {
  direction: ltr;
  font-size: 28px;
  line-height: 36px;
  color: #282828;
  justify-content: center;
  text-align: center;
  height: 60px;
  padding: 12px 0;
}

.text2 {
  direction: rtl;
  font-size: 24px;
  line-height: 30px;
  color: #d53833;
  width: 150px;
  border-radius: 9px;
  border-width: 1px;
  border-color: #d53833;
  margin-bottom: 16px;
  padding-top: 16px;
  padding-bottom: 10px;
  margin-right: 24px;
  justify-content: center;
  text-align: center;
}

.content {
  /* border-top-color: #e8e8e8;
  border-top-width: 1px; */
  /* background-color: rgb(237, 241, 246); */
  width: 750px;
  align-items: center;
}
.content-box-div {
  width: 690px;
  margin-top: 24px;
}

.content-box-end {
  width: 690px;
  margin-bottom: 30px;
}

.content-box1 {
  width: 690px;
  /* background-color: #ffffff; */
  border-radius: 16px;
  border-width: 1px;
  border-color: #eef1f6;
  /* box-shadow: 0px 0px 12px #e4e9f1; */
}

.content-box-text {
  background-color: #eef1f6;
}

.content-box-text1 {
  font-size: 30px;
  margin-right: 30px;
  line-height: 48px;
  color: #282828;
}
.content-box-text-5 {
  flex-direction: row;
  /* margin-left: 30px;
  margin-right: 30px; */
  border-top-color: #e8e8e8;
  border-top-width: 1px;
  /* width: 630px; */
  background-color: #ffffff;
}
.content-box-text-6 {
  margin-top: 16px;
  flex-direction: row;
  direction: rtl;
  width: 420px;
}

.content-box-text-7 {
  margin-top: 16px;
  flex-direction: row;
  width: 246px;
  direction: ltr;
  margin-left: 24px;
}
.content-box-text-2 {
  margin-top: 16px;
  width: 630px;
  margin-left: 24px;
  flex-direction: row;
  background-color: #ffffff;
}

.content-shop {
  margin-top: 12px;
  margin-bottom: 12px;
  width: 630px;
}

.content-shop-text {
  color: #666666;
  font-size: 24px;
  line-height: 48px;
  margin-left: 24px;
}

.content-box-text-3 {
  color: #333333;
  font-size: 28px;
  line-height: 48px;
  margin-bottom: 24px;
  float: left;
  width: 430px;
}

.content-box-text-4 {
  float: right;
  color: #999999;
  font-size: 24px;
  line-height: 48px;
  direction: rtl;
  width: 200px;
}
.orderDataNo{
  width: 750px;
  margin-top: 174px;
  align-items: center;
}
.orderDataNo-text{
  font-size: 28px;
  line-height: 48px;
  color: #cccccc;
}
</style>
