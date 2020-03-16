<template>
<div>
  <div class="page-login"></div>
  <div class="login-content">
    <form id="login-form">
      <div class="form-row">
        <input type="text" id="account" class="mui-input" placeholder="用户名" />
      </div>
      <div class="form-row">
        <input type="text" id="account" class="mui-input" placeholder="手机号码" />
      </div>
      <div class="form-row">
        <input type="text" id="account" class="mui-input" placeholder="密码" />
      </div>
       <div class="form-row">
        <input type="text" id="account" class="mui-input" placeholder="确认密码" />
      </div>
      <div class="form-register">
        <router-link to="/login">已有账号？去登录</router-link>
      </div>
      <div>
        <button type="button" id="login" class="mui-btn mui-btn-block mui-btn-login">
            注册
        </button>
      </div>
    </form>
  </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
 .page-login{
   background-image: url('../../assets/img/loginbg.jpg');
   background-size: 100% 100%;
   filter: blur(10px);
 }
 .page-login{
   width: 100%;
   height: 667px;
 }
.login-content{
    position:absolute;
    top: 20%;
    width: 90%;
    left: 50%;
    margin-left: -45%;
    border-radius: 10px;
    padding: 0 25px;
    background-color: #fff;
}
.form-row {
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
}
.form-row .mui-input {
  border: 1px solid #fb4746;
  border-radius: 30px;
  background-color: transparent;
}
.form-register {
  margin-top: 12px;
  margin-bottom: 15px;
  text-align: right;
}
.mui-btn-login{
  padding: 10px 0;
  background-color: #ff7776;
  border: 1px solid #fb4746;
  color: #fff;
  border-radius: 30px;
}
.mui-btn-block{
  font-size:15px;
  display: block;
  width: 100%;
  margin-bottom: 15px;
}
</style>
