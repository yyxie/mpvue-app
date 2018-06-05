<template>
<!--  <div class="counter-warp">
    <div class="myBackground">ddd</div>
    <p>Vuex counter：{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>

    <a href="/pages/index/main" class="home">去往首页</a>
    <picker mode="date" :value="date" start="2015-09-01" end="2017-09-01" @change="bindDateChange">
      <view class="picker">
        当前选择: {{date}}
      </view>
    </picker>-->
    <web-view src="https://mp.weixin.qq.com/"></web-view>
<!--  </div>-->
</template>

<script>
  // Use Vuex
  import store from './store'
  import './test.css'
  import '@/../static/css/weui/style/weui.wxss'

/*  import '../../weui/style/weui.wxss' */

  export default {
    data: {
      date: '2016-09-09'
    },
    computed: {
      count () {
        return store.state.count
      }
    },
    created () {
    },
    methods: {
      increment () {
        this.$http.authorList().then(function (res) {
          console.log('请求')
          console.log(res)
        })
        store.commit('increment')
      },
      decrement () {
        store.commit('decrement')
      },
      bindDateChange () {
        console.log('ffff')
      }
    }
  }

</script>
<style>
  .counter-warp {
    text-align: center;
    margin-top: 2px;
  }

  .home {
    display: inline-block;
    margin: 100px auto;
    padding: 5px 10px;
    color: blue;
    border: 1px solid blue;
  }
</style>
