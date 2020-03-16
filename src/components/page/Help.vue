<template>
  <div class="container">
    <div class="help-body">
      <van-tabs v-model="active">
        <van-tab title="订单问题">
          <van-collapse v-model="activeNames">
            <van-collapse-item title="物流问题" name="1">
              <p class="helpitem">我们将根据您选择的支付方式与收货地址自动选择最优惠、最快的配送方式</p>
              <p class="helpitem">订单购物金额达到包邮条件时，可以享受免费的配送服务</p>
            </van-collapse-item>
            <!-- <van-collapse-item title="售后问题" name="2">
              <ul class="mui-table-view">
                <li class="mui-table-view-cell">
                  <router-link to="/adressList">
                    <a class="mui-navigate-right">1.退换货规定</a>
                  </router-link>
                </li>
                <li class="mui-table-view-cell">
                  <router-link to="/adressList">
                    <a class="mui-navigate-right">2.退换及退款说明</a>
                  </router-link>
                </li>
              </ul>
            </van-collapse-item> -->
          </van-collapse>
        </van-tab>
        <van-tab title="购物问题">
          <van-collapse v-model="activeNames">
            <van-collapse-item title="商品问题" name="1">
              <p class="helpitem">我们经营的每一件商品都通过严苛的把关，保障正品，保障特质。特推出“假一赔十”的正品保障政策，杜绝一切假货，让您无忧购物。</p>
            </van-collapse-item>
            <van-collapse-item title="活动问题" name="2">
              <p class="helpitem">活动时间以活动页面的展示为准，活动不同，活动时间不同哦，如果有比较满意的活动商品，建议您尽快购买。</p>
            </van-collapse-item>
          </van-collapse>
        </van-tab>
        <van-tab title="使用问题">
          <van-collapse v-model="activeNames">
            <van-collapse-item title="购买流程" name="1">
              <p class="helpitem">
                <span>1.登陆/注册</span><br>
                <span>2.选择商品</span><br>
                <span>3.加入购物车</span><br>
                <span>4.填写订单信息</span><br>
                <span>5.购买成功</span>
              </p>
            </van-collapse-item>
          </van-collapse>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 2,
      activeNames: ['1']
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
