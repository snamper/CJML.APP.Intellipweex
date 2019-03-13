<template>
    <div class="wrapper page">
        <waterfall column-count="2" column-width="330px" class="waterfall" @appear="appear" column-gap="30">
            <cell v-for="(item,index) in imageList" :key="index" :class="[index%2===0?'imagecolumn0':'imagecolumn1']">
                <image class="itemPhoto" v-bind:style="{'width':'330px','height':'330px'}" :src="item.src" @load="onImageLoad(item,$event)"/>
            </cell>
        </waterfall>
    </div>
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
        padding: 0,        
        columnCount: 2,
        columnGap: 12,
        columnWidth: 'auto',
        showScrollbar: true,
        scrollable: true,
        show: false,
        height:'300px'
    };
  },
  created() {
      this.imageList.map(function(item,index){
          item.classname="imagecolumn"+index%2;
          item.height=330;
      });
  },
  methods: {
    appear(event) {
        
    },
    onImageLoad(source,event){
        var bl = 330/event.size.naturalWidth;
        source.height=event.size.naturalHeight*bl;
    },
    openLightBox () {
        this.show = true;
    },
    wxcLightboxOverlayClicked () {
    // 无状态组件，需要在此次关闭
    this.show = false;
    }
  }
};
</script>
<style>

.wrapper {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    width: 750px;
}
.imagecolumn0{
    justify-content: center;
    align-items: right;
    direction: rtl;
}
.imagecolumn1{
    justify-content: center;
    align-items: right;
}
.itemPhoto{
    margin-bottom: 30px;
    border-color: #fafafa;
    border-style: solid;
    border-width: 6px;
    border-radius: 6px; 
}
</style>
