<template>
<div class="login-box">
  <div class="login-logo">
    <a href="../"><b>SIMPLE</b>website</a>
  </div>
  <!-- /.login-logo -->
  <div class="login-box-body">
    <p class="login-box-msg"><b>用户登录</b></p>

    <form action="#" method="post">
      <div class="form-group has-feedback">
        <input type="Phone" class="form-control" v-model="telephone" placeholder="手机号">
        <span class="glyphicon glyphicon-phone form-control-feedback"></span>
      </div>
      <div class="form-group has-feedback">
        <input type="password" class="form-control" v-model="password" placeholder="密码">
        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
      </div>
      <div class="row">
        <div class="col-xs-6">
          <div class="checkbox no-top-bottom-margin">
            <input type="checkbox" id="rememberCheckBox"> 
            <label class="no-left-padding" for="rememberCheckBox">下次自动登录</label>
          </div>
        </div>
        <!-- /.col -->
        <div class="col-xs-6">
          <button type="button" @click="loginByPhone()" class="btn btn-info btn-block">立即登录</button>
        </div>
        <!-- /.col -->
      </div>
    </form>

    <div class="social-auth-links text-center">
      <p>- OR -</p>
      <a href="#" class="btn btn-block btn-social btn-primary btn-flat"><i class="fa fa-envelope"></i>用邮箱登录</a>
      <a href="#" class="btn btn-block btn-social btn-default btn-flat"><i class="fa fa-question"></i>以游客方式登录</a>
    </div>
    <!-- /.social-auth-links -->
    <label for=""><a href="#">忘记密码？</a><br></label>
    <label for="" class="pull-right"><router-link class="text-center" to="/register">立即注册</router-link></label>
  </div>
  <!-- /.login-box-body -->
</div>
<!-- /.login-box -->
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        telephone: null,
        password: null
      }
    },
    mounted () {
      $("body")[0].className="hold-transition login-page";
    },
    beforeDestroy(){
      $("body")[0].removeAttribute("hold-transition login-page");
    },
    methods:{
      loginByPhone(){
        if(!this.telephone){
          alert("请输入正确的手机号")
          return
        }
        if(!this.password){
          alert("密码无效，请重新输入")
          return
        }
        this.$api.account.login({
          username: this.telephone,
          password: this.password
        }).then(res=>{
          alert("登录成功")
          this.$router.push("/start")
        })
      }
    }
  }
</script>

<style>
</style>