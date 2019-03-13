<template>
  <div class="wrapper">
    <image :src="logo" class="logo" />
    <text class="greeting">李小龙</text>
    
    <Bar/>
    <Foo/>
    
  </div>
</template>

<script>
import Foo from '../../components/foo'
import Bar from './bar'

export default {
  name: 'App',
  components: {
    Foo,
    Bar
  },
  data () {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
    }
  }
}
</script>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
  .logo {
    width: 424px;
    height: 200px;
  }
  .greeting {
    text-align: center;
    margin-top: 70px;
    font-size: 50px;
    color: #41B883;
  }
  .message {
    margin: 30px;
    font-size: 32px;
    color: #727272;
  }
</style>
