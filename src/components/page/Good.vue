<template>
  <div class="body">
    <!-- 顶部区域 -->
     <mt-header fixed title="DASIY">
      <span slot="left" @click="goBack" v-show="flag">
        <mt-button icon="back">返回</mt-button>
      </span>
    </mt-header>
    <!-- 商品详情图片懒加载 -->
    <div class="goodsinfo">
    <van-swipe :autoplay="3000">
  <van-swipe-item v-for="(image, index) in images" :key="index">
    <img v-lazy="image" />
  </van-swipe-item>
</van-swipe>
<p class="goodsinfo-title">纪梵希高定“情”吻礼盒</p>
<p class="goodsinfo-title">2020 VALENTINE SET</p>
<p class="goodsinfo-title">¥1380.00</p>
</div>
    <!-- 商品导航栏 -->
    <van-goods-action>
  <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
  <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
  <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
</van-goods-action>
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  data () {
    return {
      flag: false,
      images: [
        'https://ssl2.sephorastatic.cn/products/5/0/4/3/3/3/1_n_08182_640x640.jpg',
        'https://ssl2.sephorastatic.cn/products/5/0/4/3/3/3/1_n_08182_640x640.jpg'
      ]
    }
  },
  created () {
    // 避免刷新操作后返回按键消失问题
    this.flag = this.$route.path !== '/home'
  },
  methods: {
    goBack () {
      // 点击后退历史操作
      this.$router.go(-1)
    },
    onClickIcon () {
      Toast('选择规格')
    },
    onClickButton () {
      Toast('已加入购物车')
    }
  }
}
</script>

<style lang="scss" scoped>
.body{
 background-color: #fff;
}
.mint-header{
  background-color:  #fb4746;
}
.goodsinfo-title{
  font-size: 15px;
  color: #000;
  margin-left: 10px;
}
</style>
