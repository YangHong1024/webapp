<template>
  <div class="container">
    <div class="me-login">
      <router-link to="/login">
       <div class="me-img"><img src="https://ssl1.sephorastatic.cn/wcsfrontend/campaign/mobile_img/2019/07/banner/brand-8.png" alt=""></div>
       <p class="me-login-title">点击登录/注册</p>
       </router-link>
    </div>
    <van-cell-group>
  <van-cell title="我的订单"  />
  <van-grid :column-num="5">
  <van-grid-item >
    <i class="iconfont">&#xe607;</i>
    <p class="me-title">待付款</p>
  </van-grid-item>
  <van-grid-item >
    <i class="iconfont">&#xe614;</i>
    <p class="me-title">待发货</p>
  </van-grid-item>
  <van-grid-item >
    <i class="iconfont">&#xe63b;</i>
    <p class="me-title">待收货</p>
  </van-grid-item>
  <van-grid-item >
    <i class="iconfont">&#xe613;</i>
    <p class="me-title">待评价</p>
  </van-grid-item>
  <van-grid-item >
    <i class="iconfont">&#xe66d;</i>
    <p class="me-title">全部订单</p>
  </van-grid-item>
</van-grid>
</van-cell-group>
<ul class="mui-table-view">
    <li class="mui-table-view-cell">
       <router-link to="/adressList">
        <a class="mui-navigate-right"><i class="iconfont">&#xe615;</i>配送地址</a>
        </router-link>
    </li>
    <li class="mui-table-view-cell">
      <router-link to="/help">
        <a class="mui-navigate-right"><i class="iconfont">&#xe652;</i>帮助中心</a>
      </router-link>
    </li>
    <li class="mui-table-view-cell">
      <router-link to="/aboutus">
        <a class="mui-navigate-right"><i class="iconfont">&#xe602;</i>关于我们</a>
        </router-link>
    </li>
</ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
  background: #fff;
  height: 92vh;
  padding:10px 0 10px 13px;
}
.me-img{
  width:50px;
  height: 50px;
  margin: 20px 0 0 20px;
}
.me-login{
  width: 350px;
  height: 150px;
  border-radius: 20px;
  background-color: rgba(0,0,0,0.8);
  padding: 20px 10px;
}
.me-login-title{
  color: white;
  font-size: large;
  margin: -30px 0 0 90px;
}
.iconfont{
  margin:10px 10px 0 5px;
  font-size: x-large;
  text-align: center;
}
.me-title{
  margin-top: 10px;
}

</style>
