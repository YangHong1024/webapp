<template>
  <div class="container">
    <v-SideBar></v-SideBar>
    <router-view />
  </div>
</template>

<script>
import vSideBar from '../../components/common/SideBar'
export default {
  components: {
    vSideBar
  }
}
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  background: #fff;
  height: 100vh;
}
</style>
