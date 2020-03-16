<template>
  <div class="index-body">
    <div class="mui-input-row mui-search" id="searchForm">
      <input
        type="search"
        id="searchInput"
        onkeyup="enterSearch(event)"
        class="mui-input-clear"
        placeholder="搜索"
      />
      <router-link to="/login">
        <button class="input-button" type="button">登录/注册</button>
      </router-link>
    </div>
    <v-slider></v-slider>
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
          <a href="#">
            <span>
              <img
                src="../../assets/img/brand-1.png"
              />
            </span>
            <div class="mui-media-body">畅销榜单</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
          <a href="#">
            <span>
              <img
                src="../../assets/img/brand-2.png"
              />
            </span>
            <div class="mui-media-body">本周特惠</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
          <a href="#">
             <span>
              <img
                src="../../assets/img/brand-3.png"
              />
            </span>
            <div class="mui-media-body">新品速递</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
          <a href="#">
             <span>
              <img
                src="../../assets/img/brand-4.png"
              />
            </span>
            <div class="mui-media-body">礼物套装</div>
          </a>
        </li>
      </ul>
    </div>
    <div class="everyweek">
        <img src="../../assets/img/week.jpg" alt="">
        <div class="everyweek-title">
          <p>每周惠选</p>
          <p>盘点每周特惠套装，碰撞心动惊喜</p>
    </div>
          <div class="mui-content">
        <ul class="mui-table-view mui-grid-view mui-grid-9">
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
            <span>
              <img
                src="https://ssl3.sephorastatic.cn/products/V/S/1/0/0/3/1/4/0/1_n_07568_210x210.jpg"
              />
            </span>
            <div class="mui-media-body">人气搭配卸妆水+化妆棉惠选</div>
             <div class="mui-media-body">¥159.00</div>
          </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
            <span>
              <img
                src="https://ssl2.sephorastatic.cn/products/5/0/9/5/9/2/1_n_08101_210x210.jpg"
              />
            </span>
            <div class="mui-media-body">蒂佳婷面膜套盒</div>
             <div class="mui-media-body">¥580.00</div>
          </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/good">
            <span>
              <img
                src="https://ssl2.sephorastatic.cn/products/5/0/4/3/3/3/1_n_08182_210x210.jpg"
              />
            </span>
            <div class="mui-media-body">纪梵希套盒</div>
             <div class="mui-media-body">¥1380.00</div>
         </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import vSlider from '../../components/common/Slider'
export default {
  components: {
    vSlider
  },
  mounted () {
    axios.post('/api/tuijian/select').then(res => {
      console.log('接口连接成功')
      console.log(res.data)
    })
  }
}
</script>

<style  scoped>
.index-body{
   background-color:#fff;
   height: 132vh;
}
.mui-input-clear {
  width: 65%;
  margin: 5px 5px 5px 10px;
  background-color: #fff;
  border: 2px solid #fb4746;
  border-radius: 20px;
}
.input-button {
  border: 1px solid #fb4746;
  margin: 5px 5px 0 5px;
  color: #fb4746;
}
.mui-content {
  margin-top: -12px;
}
.mui-grid-view.mui-grid-9{
  background: #fff;
  border-top: 0;
  border-left: 0;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  border-right: 0;
  border-bottom: 0;

}
.mui-media-body{
  font-family: '宋体';
}
</style>
