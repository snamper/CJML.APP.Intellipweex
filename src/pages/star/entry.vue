<template>
  <div style="justify-content:center">
    <text class="label">Weex Star Count</text>
    <text class="count">{{count}}</text>
  </div>
</template>

<script>
const stream = weex.requireModule('stream');
const meta = weex.requireModule('meta');
const titleBar = weex.requireModule('titleBar')
// var resourceUrl = process.env;
import commonMixin from "../../config/commonMixin";

export default {
  data () {
    return {
      count: 'fetching...'
    }
  },
  created () {
    debugger
    if (titleBar) {
 
      titleBar.setTitle('详情')
    }
  },
  mounted(){
    

    var _this = this;
    commonMixin.ajax({
      method: 'GET',
      type: 'json',
      url: 'https://api.github.com/repos/apache/incubator-weex',
      success:function(res){
        if (res.ok) {
          _this.count = res.data.stargazers_count
        } else {
          _this.count = '- unknown -'
        }
      }
    })


    meta.setViewport({
      width: 640,
      roundOffDeviation: false
    });
  }
}
</script>

<style scoped>
  .label {
    color: #666666;
    text-align: center;
    font-size: 60px;
  }
  .count {
    color: #41B883;
    text-align: center;
    font-size: 100px;
    margin-top: 80px;
    margin-bottom: 100px;
  }
</style>
