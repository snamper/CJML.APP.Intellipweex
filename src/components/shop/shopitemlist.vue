<template>
    <scroller>
        <div class="listbox">
            <div class="imagecolumn" v-for="(item,index) in imageList" :key="index">
                <image class="itemPhoto" resize='cover' :src="item.src" @click="openLightBox(index)" @load="onImageLoad(item,$event)"/>
            </div>
        </div>
        
        <wxc-lightbox
            ref="wxc-lightbox"
            height="800"
            :show="show"
            :index="index"
            :image-list="imageList"
            @wxcLightboxOverlayClicked="wxcLightboxOverlayClicked">
        </wxc-lightbox>
    </scroller>
    <!-- <list class="listbox">
        <cell v-for="(item,index) in imageList" :key="index" class="imagecolumn">
            <image class="itemPhoto" resize='contain' v-bind:style="{'width':'330px','height':'330px'}" :src="item.src" @load="onImageLoad(item,$event)"/>
        </cell>
    </list> -->
    <!-- <div class="wrapper page">
        <waterfall column-count="2" column-width="330px" class="waterfall" @appear="appear" column-gap="30">
            <cell v-for="(item,index) in imageList" :key="index" :class="[index%2===0?'imagecolumn0':'imagecolumn1']">
                <image class="itemPhoto" resize='contain' v-bind:style="{'width':'330px','height':'330px'}" :src="item.src" @load="onImageLoad(item,$event)"/>
            </cell>
        </waterfall>
    </div> -->
</template>
<script>
const modal = weex.requireModule("modal");
import { WxcLightbox } from 'weex-ui';
export default {
    components: {
        WxcLightbox
    },
  data() {
    return {
        imageList: [
            {
            src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552319276302&di=b7f644ba1b18184fe18eae621315cd63&imgtype=0&src=http%3A%2F%2Fimg1d.xgo-img.com.cn%2Fpics%2F1538%2F1537599.jpg',
            height:0,
            classname:"imagecolumn0"
            },
            {
            src:'https://gw.alicdn.com/tps/TB1Hv1JPFXXXXa3XXXXXXXXXXXX-370-370.jpg',
            height:0
            },
            {
            src:'https://gw.alicdn.com/tps/TB1eNKuPFXXXXc_XpXXXXXXXXXX-370-370.jpg',
            height:0
            },
            {
            src:'https://gw.alicdn.com/tps/TB1DCh8PFXXXXX7aXXXXXXXXXXX-370-370.jpg',
            height:0
            },
            {
            src:'https://gw.alicdn.com/tps/TB1ACygPFXXXXXwXVXXXXXXXXXX-370-370.jpg',
            height:0
            },
            {
            src:'https://gw.alicdn.com/tps/TB1IGShPFXXXXaqXVXXXXXXXXXX-370-370.jpg',
            height:0
            },
            {
            src:'https://gw.alicdn.com/tps/TB1xU93PFXXXXXHaXXXXXXXXXXX-240-240.jpg',
            height:0
            },
            {
            src:'https://gw.alicdn.com/tps/TB19hu0PFXXXXaXaXXXXXXXXXXX-240-240.jpg',
            height:0
            },
            {
            src:'https://gw.alicdn.com/tps/TB1ux2vPFXXXXbkXXXXXXXXXXXX-240-240.jpg',
            height:0
            },
            {
            src:'https://gw.alicdn.com/tps/TB1tCCWPFXXXXa7aXXXXXXXXXXX-240-240.jpg',
            height:0
            }
        ],
        show: false,
        index:0
    };
  },
  created() {
      this.imageList.map(function(item,index){
          item.classname="imagecolumn"+index%2;
          item.height=330;
      });
  },
  methods: {
    wxcLightboxOverlayClicked () {
        // 无状态组件，需要在此次关闭
        this.show = false;
    },
    onImageLoad(source,event){
        var bl = 330/event.size.naturalWidth;
        source.height=event.size.naturalHeight*bl;
    },
    openLightBox (index) {
        this.show = true;
        this.index=index;
    },
    wxcLightboxOverlayClicked () {
    // 无状态组件，需要在此次关闭
        this.show = false;
    }
  }
};
</script>
<style>
.listbox{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: 30px;
}
.imagecolumn{
    width: 330px;
    height: 330px;
    margin-bottom: 30px;
    margin-right: 30px;
}
.itemPhoto{
    margin-bottom: 30px;
    border-color: #fafafa;
    border-style: solid;
    border-width: 6px;
    border-radius: 6px; 
    width: 330px;
    height: 330px;
}
</style>
