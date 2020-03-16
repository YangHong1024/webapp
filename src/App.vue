<template>
  <div id="app">
    <van-tabbar v-model="active" v-if="$route.meta.keepAlive" active-color="#FF0000" inactive-color="#000">
      <keep-alive>
        <van-tabbar-item to="/">
          <span class="iconfont">&#xe600;</span>
          <p class="tabbar-title">首页</p>
        </van-tabbar-item>
      </keep-alive>
      <keep-alive>
        <van-tabbar-item to="/category">
          <span class="iconfont">&#xe601;</span>
          <p class="tabbar-title">分类</p>
        </van-tabbar-item>
      </keep-alive>
      <keep-alive>
        <van-tabbar-item to="/shopcar">
          <span class="iconfont">&#xe605;</span>
          <p class="tabbar-title">购物车</p>
        </van-tabbar-item>
      </keep-alive>
      <keep-alive>
        <van-tabbar-item to="/me">
          <span class="iconfont">&#xe606;</span>
          <p class="tabbar-title">我的</p>
        </van-tabbar-item>
      </keep-alive>
    </van-tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.iconfont {
  font-size: large;
}
.van-tabbar-item {
  text-align: center;
  margin-bottom: -5px;
}
.tabbar-title {
  margin-top: 5px;
}
</style>
