<template>
  <div class="wrapper">
      <!-- <div class="ChoiceSeach">
        <div class="Seach">
         <div>
            <text></text>      
        </div>
        <input>
        <div >
            <text ></text>
          
        </div>

        </div>
    </div> -->

    <div class="title">
      <div class="title3"><text class="title1">服务次数</text><text class="title2">100</text></div>
      <div><text class="title1">平均分</text><text class="title2">4.88</text></div>
    </div>


  

    

    <div class="content">

      <list class="list" @loadmore="loadmore" @scroll="scroll" offset-accuracy=100 show-scrollbar=false>

         <refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
      <text class="indicator-text">Refreshing ...</text>
      <loading-indicator class="indicator"></loading-indicator>
    </refresh>

         <cell>
           <div class="content-box">

             <div class="date-h">
              <text class="date">2019.03.08 12:24:56</text>
             </div>
                <div class="content-box1">
                 <div class="content-box-text">
                  <text class="content-box-text1">宝马 535i(F10 LCI 2013-)(进口)3.0T</text>
                </div>
                <div class="content-box-text-2">
                 <text  class="content-box-text-3">LZWADAGA3FB486407</text>  <text class="content-box-text-4">沪A B2018</text>
                 </div>
                 
                 <div class="content-box-text-5">

                    <div class="content-box-text-6">
                  <text class="text">报价要货</text>  <text class="text">好评分享</text>   <text class="text">基本信息</text>
                  </div>
                 </div>
                 </div>
           </div>
         </cell>

          <cell>
           <div class="content-box">
             <div class="date-h">
              <text class="date">2019.03.08 12:24:56</text>
             </div>

                <div class="content-box1">
                 <div class="content-box-text">
                  <text class="content-box-text1">宝马 535i(F10 LCI 2013-)(进口)3.0T</text>
                </div>
                <div class="content-box-text-2">
                 <text  class="content-box-text-3">LZWADAGA3FB486407</text>  <text class="content-box-text-4">沪A B2018</text>
                 </div>
                 
                 <div class="content-box-text-5">

                    <div class="content-box-text-6">
                  <text class="text">报价要货</text>  <text class="text">好评分享</text>   <text class="text">基本信息</text>
                  </div>
                 </div>
                 </div>
           </div>
         </cell>

          <cell>
           <div class="content-box">
            <div class="date-h">
              <text class="date">2019.03.08 12:24:56</text>
             </div>

                <div class="content-box1">
                 <div class="content-box-text">
                  <text class="content-box-text1">宝马 535i(F10 LCI 2013-)(进口)3.0T</text>
                </div>
                <div class="content-box-text-2">
                 <text  class="content-box-text-3">LZWADAGA3FB486407</text>  <text class="content-box-text-4">沪A B2018</text>
                 </div>
                 
                 <div class="content-box-text-5">

                    <div class="content-box-text-6">
                  <text class="text">报价要货</text>  <text class="text">好评分享</text>   <text class="text">基本信息</text>
                  </div>
                 </div>
                 </div>
           </div>
         </cell>
          <cell>
           <div class="content-box">
           <div class="date-h">
              <text class="date">2019.03.08 12:24:56</text>
             </div>

                <div class="content-box1">
                 <div class="content-box-text">
                  <text class="content-box-text1">宝马 535i(F10 LCI 2013-)(进口)3.0T</text>
                </div>
                <div class="content-box-text-2">
                 <text  class="content-box-text-3">LZWADAGA3FB486407</text>  <text class="content-box-text-4">沪A B2018</text>
                 </div>
                 
                 <div class="content-box-text-5">

                    <div class="content-box-text-6">
                  <text class="text">报价要货</text>  <text class="text">好评分享</text>   <text class="text">基本信息</text>
                  </div>
                 </div>
                 </div>
           </div>
         </cell>

          <cell>
           <div class="content-box-end">
              <div class="date-h">
              <text class="date">2019.03.08 12:24:56</text>
             </div>

                <div class="content-box1">
                 <div class="content-box-text">
                  <text class="content-box-text1">宝马 535i(F10 LCI 2013-)(进口)3.0T</text>
                </div>
                <div class="content-box-text-2">
                 <text  class="content-box-text-3">LZWADAGA3FB486407</text>  <text class="content-box-text-4">沪A B2018</text>
                 </div>
                 
                 <div class="content-box-text-5">

                    <div class="content-box-text-6">
                  <text class="text">报价要货</text>  <text class="text">好评分享</text>   <text class="text">基本信息</text>
                  </div>
                 </div>
                 </div>
           </div>
         </cell>


         <loading class="loading" @loading="onloading" :display="loadinging ? 'show' : 'hide'">
      <text class="indicator-text">加载跟多 ...</text>
      <loading-indicator class="indicator"></loading-indicator>
    </loading>

       </list>

    </div>
  
    <!-- <text class="message text" v-bind:style="{color: textColor}">测试：</text>
    <text class="message" v-bind:style="{color: textColor}">{{clickedBtn}}</text> -->
  </div>
</template>

<script>

 const modal = weex.requireModule('modal')
export default {
  data() {
    return {
       loadinging: false,
       refreshing: false,
      clickedBtn: "",
      textColor: ""
    };
  },
  created() {},
  methods: {
 onloading (event) {
        modal.toast({ message: 'Loading', duration: 1 })
        this.loadinging = true
        setTimeout(() => {
          this.loadinging = false
        }, 2000)
      },
     onrefresh (event) {
        modal.toast({ message: 'Refreshing', duration: 1 })
        this.refreshing = true
        setTimeout(() => {
          this.refreshing = false
        }, 2000)
      },
      onpullingdown (event) {
        console.log("dy: " + event.dy)
        console.log("pullingDistance: " + event.pullingDistance)
        console.log("viewHeight: " + event.viewHeight)
        console.log("type: " + event.type)
      },
    loadmore() {
        modal.toast({
          message: '触发 loadmore 事件'
        })
      },
      scroll(e) {
        modal.toast({
          message: "滚动了"
        })
      }
  }
};
</script>

<style scoped>

 .loading {
    /* width: 750px; */
    display: -ms-flex;
    display: -webkit-flex; 
    display: flex; 
    -ms-flex-align: center;
     -webkit-align-items: center;
    -webkit-box-align: center;
     align-items: center;
  }
 .refresh {
    /* width: 750px; */
    display: -ms-flex;
    display: -webkit-flex;
    display: flex;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    align-items: center;
  }
  .indicator-text {
    color: #888888;
    font-size: 42px;
    text-align: center;
  }
  .indicator {
    margin-top: 16px;
    height: 40px;
    width: 40px;
    color: blue;
  }



.Seach {
  border-radius: 0.4rem;
  width: 600px;
}
.title {
  width: 750px;
  flex-direction: row;
  margin-bottom: 36px;
  margin-top: 24px;
  
}

.title1 {
  width: 375px;
  font-size: 24px;
  line-height: 36px;
  color: #999999;
  text-align: center;
}

.title3 {
  border-right-color: #eeeeee;
  border-right-width: 1px;
}

.list1{
 width: 750px;

  
}
.title2 {
  margin-top: 16px;
  font-size: 42px;
  line-height: 60px;
  color: #d53533;
  text-align: center;
}

.date-h {
  height: 70px;
}

.text {
  font-size: 24px;
  line-height: 36px;
  color: #d53833;
  width: 138px;
  border-radius: 9px;
  border-width: 1px;
  border-color: #d53833;
  margin-bottom: 24px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-left: 24px;
  justify-content: center;
  text-align: center;
}

.content {
  border-top-color: #e8e8e8;
  border-top-width: 1px;
  background-color: rgb(237, 241, 246);
  width: 750px;
  justify-content: center;
  align-items: center;
}
.content-box {
  width: 690px;
  
}

.content-box-end {
  width: 690px;
  margin-bottom: 30px;
}

.content-box1 {
  width: 690px;
  background-color: #ffffff;
  border-radius: 16px;
  /* box-shadow: 0px 0px 12px #e4e9f1; */
}

.content-box-text {
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 24px;
  background-color: #ffffff;
}

.content-box-text1 {
  font-size: 30px;
  margin-right: 30px;
  line-height: 48px;
  color: #282828;
}
.content-box-text-5 {
  margin-left: 30px;
  margin-right: 30px;
  border-top-color: #e8e8e8;
  border-top-width: 1px;
  width: 630px;
  background-color: #ffffff;
}
.content-box-text-6 {
  margin-top: 24px;
  flex-direction: row;
  direction: rtl;
}

.date {
  text-align: center;
  color: #999999;
  font-size: 24px;
  line-height: 48px;
  margin-top: 11px;
  justify-content: center;
}
.content-box-text-2 {
  margin-top: 10px;
  width: 630px;
  margin-left: 30px;
  flex-direction: row;
  background-color: #ffffff;
}

.content-box-text-3 {
  color: #999999;
  font-size: 24px;
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

.ChoiceSeach {
  background-color: #d53533;
  width: 750px;
}
</style>
