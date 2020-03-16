<template>
  <div>
    <div class="sidebar">
    <van-sidebar v-model="activeKey" style="height:92.5vh;background:#FAFAFA;">
      <van-sidebar-item title="面部清洁" to='/kind'>
      </van-sidebar-item>
      <van-sidebar-item title="面部护肤" to='/facialskincare' />
      <van-sidebar-item title="功能面膜" to="/mask"/>
      <van-sidebar-item title="身体护理" to="/bodyClean"/>
      <van-sidebar-item title="洗发护发" to="/hairCair"/>
      <van-sidebar-item title="国货彩妆" to="/chineseGoods"/>
      <van-sidebar-item title="国际彩妆" to="/international"/>
      <van-sidebar-item title="防晒专区" to="/sunscreen"/>
    </van-sidebar>

     </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeKey: 0
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
