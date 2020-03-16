<template>
  <div class="container">
    <div class="kind-body">
      <span class="kind-body-title">
        脸部彩妆
        <i class="iconfont">&#xe603;</i>
      </span>
      <div class="mui-content">
        <ul class="mui-table-view mui-grid-view mui-grid-9">
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
              <span class="mui-icon mui-icon-home"></span>
              <div class="mui-media-body">洗发水</div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
              <span class="mui-icon mui-icon-email"></span>
              <div class="mui-media-body">洗发喷雾</div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
              <span class="mui-icon mui-icon-chatbubble"></span>
              <div class="mui-media-body">套装</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="kind-body">
      <span class="kind-body-title">
        护发产品
        <i class="iconfont">&#xe603;</i>
      </span>
      <div class="mui-content">
        <ul class="mui-table-view mui-grid-view mui-grid-9">
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
              <span class="mui-icon mui-icon-home"></span>
              <div class="mui-media-body">护发素</div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
              <span class="mui-icon mui-icon-chatbubble"></span>
              <div class="mui-media-body">发膜</div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
              <span class="mui-icon mui-icon-chatbubble"></span>
              <div class="mui-media-body">精油</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="kind-body">
      <span class="kind-body-title">
        美发产品
        <i class="iconfont">&#xe603;</i>
      </span>
      <div class="mui-content">
        <ul class="mui-table-view mui-grid-view mui-grid-9">
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
              <span class="mui-icon mui-icon-home"></span>
              <div class="mui-media-body">弹力素</div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
              <span class="mui-icon mui-icon-email"></span>
              <div class="mui-media-body">发胶</div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
              <span class="mui-icon mui-icon-chatbubble"></span>
              <div class="mui-media-body">染发</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style scoped>
.container {
  background: #fff;
  height: 92vh;
}
.kind-body {
  padding: 20px 10px;
  border-bottom: 5px solid #f5f5f5;
}
.iconfont {
  float: right;
  margin-right: 10px;
}
.mui-grid-view.mui-grid-9 {
  background: #fff;
  border-top: 0;
  border-left: 0;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border-right: 0;
  border-bottom: 0;
}
.mui-media-body {
  font-size: x-small;
}
</style>
