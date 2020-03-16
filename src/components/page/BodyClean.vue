<template>
  <div class="container">
     <div class="kind-body">
      <span class="kind-body-title">
        身体护理
      </span>
      <div class="mui-content">
        <ul class="mui-table-view mui-grid-view mui-grid-9">
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
            <span>
              <img
                src="../../assets/img/mianmo01.jpg"
              />
            </span>
            <div class="mui-media-body">免洗面膜</div>
          </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
            <span>
              <img
                 src="../../assets/img/mianmo02.jpg"
              />
            </span>
            <div class="mui-media-body">水洗面膜</div>
          </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
           <a href="#">
            <span>
              <img
               src="../../assets/img/mianmo03.jpg"
              />
            </span>
            <div class="mui-media-body">泡泡面膜</div>
          </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
           <a href="#">
            <span>
              <img
                src="../../assets/img/mianmo04.jpg"
              />
            </span>
            <div class="mui-media-body">片状面膜</div>
          </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
           <a href="#">
            <span>
              <img
                 src="../../assets/img/mianmo05.jpg"
              />
            </span>
            <div class="mui-media-body">撕拉面膜</div>
          </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
            <span>
              <img
                 src="../../assets/img/mianmo06.jpg"
              />
            </span>
            <div class="mui-media-body">套装</div>
          </a>
          </li>
        </ul>
      </div>
     </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.kind-body-title{
  display: flex;
  flex-direction: row;
  padding: 20px 10px;
}
.mui-content{
  border-bottom: 5px solid #f5f5f5;
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
</style>
