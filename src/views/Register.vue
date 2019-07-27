<template>
  <div class="register-box">
    <div class="register-logo">
      <a href="#">
        <b>SIMPLE</b>website
      </a>
    </div>

    <div class="register-box-body">
      <p class="login-box-msg"><b>注册新用户</b></p>

      <form action="#" method="post" v-show="!confirmStatus">
        <div class="form-group has-feedback">
          <input type="text" v-model="phone" class="form-control" placeholder="请输入手机号" />
          <span class="glyphicon glyphicon-phone form-control-feedback"></span>
        </div>
        <div class="row">
            <div class="form-group has-feedback col-xs-7">
                <input type="text" v-model="verifyCode" class="form-control" placeholder="请输入验证码" />             
            </div>
             <div class="col-xs-5 no-left-padding">
                <button type="button" :disabled="noOtpStatus" @click="sendOtp()" class="btn btn-primary btn-block btn-flat">{{otpBtnTxt}}</button>
            </div>  
        </div>
        <div class="row">
          <div class="col-xs-12">
            <button type="button" @click="confirm()" class="btn btn-primary btn-block btn-flat">下一步</button>
          </div>
          <!-- /.col -->
        </div>
      </form>

      <form action="#" method="post" v-show="confirmStatus">
        <div class="form-group has-feedback">
          <input type="text" v-model.trim="username" class="form-control" placeholder="Full name" />
          <span class="glyphicon glyphicon-user form-control-feedback"></span>
        </div>
        <div class="form-group has-feedback">
          <input type="Phone" v-model.trim="phone" class="form-control" placeholder="Phone number" readonly />
          <span class="glyphicon glyphicon-phone form-control-feedback"></span>
        </div>
        <div class="form-group has-feedback">
          <input type="password" v-model.trim="password" class="form-control" placeholder="Password" />
          <span class="glyphicon glyphicon-lock form-control-feedback"></span>
        </div>
        <div class="form-group has-feedback">
          <input type="password" v-model.trim="retypePassword" class="form-control" placeholder="Retype password" />
          <span class="glyphicon glyphicon-log-in form-control-feedback"></span>
        </div>
        <div class="row">
          <div class="col-xs-6 no-right-padding font-sm">
            <div class="checkbox no-right-padding no-top-bottom-margin">
              <input type="checkbox" id='checkbox1' value="accpet" > 
              <label for="checkbox1" class="no-left-padding" @click="agreeItems()" >我同意网站的</label>  
            </div>
            <div><a href="#">《用户协议》</a><a href="#">《服务条款》</a></div> 
          </div>
          <!-- /.col -->
          <div class="col-xs-2 no-left-right-padding">
            <button type="button" @click="backToConfirm()" class="btn btn-primary btn-block">返回</button>
          </div>
          <div class="col-xs-4">
            <button type="button" @click="register()" class="btn btn-primary btn-block" :disabled="!isAgreement">立即注册</button>
          </div>
          <!-- /.col -->
        </div>
      </form>

      <div class="social-auth-links text-center">
        <p>- OR -</p>
        <a href="#" class="btn btn-block btn-social btn-default btn-flat">
          <i class="fa fa-envelope"></i> 使用邮箱注册
        </a>
        <a href="#" class="btn btn-block btn-social btn-default btn-flat">
          <i class="fa fa-question"></i> 其他方式注册
        </a>
      </div>
      <router-link class="text-center" to="/login">已有账号，立即登录</router-link>
      <!-- <a href="login.html" class="text-center">I already have a membership</a> -->
    </div>
    <!-- /.form-box -->
  </div>
  <!-- /.register-box -->
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      noOtpStatus: false,
      sendOtpCD: 0,
      timer: null,
      otpBtnTxt: "发送验证码",
      confirmStatus: false,
      phone: null,
      verifyCode: null,
      username: null,
      password: null,
      retypePassword: null,
      isAgreement: false,
      checkbox: [],
    };
  },
  mounted() {
    $("body")[0].className = "hold-transition register-page";
  },
  methods: {
    sendOtp () {
      const reg=/^1[3456789]\d{9}$/
      const TIME_COUNT = 60
      //手机号表单校验
      if(!this.phone){
        alert("手机号不能为空")
        return
      }else if(!reg.test(this.phone)){
        alert(('请输入有效的手机号码'))
        return
      }    
      //调研后端发送验证码接口，成功则启动按钮定时器
      this.$api.account.sendOtp({
        telephone: this.phone}).then(res=> {
          //alert("发送成功")
          this.sendOtpCD = TIME_COUNT
          this.noOtpStatus = true
          this.timer = setInterval(() => {
          if (this.sendOtpCD > 1 && this.sendOtpCD <= TIME_COUNT) {
              this.sendOtpCD--;
              this.otpBtnTxt = + this.sendOtpCD + "s后重新发送" 
            } else {
              this.noOtpStatus = false;
              clearInterval(this.timer);
              this.timer = null;
              this.otpBtnTxt = "重新发送"
            }
          }, 1000)
        }).catch(error=>{
          alert(error.data.status)
        })
    },

    confirm () {
      // to do 
      // 此处调用后端验证码认证的接口，成功则切换注册表单，并清空相关表单信息
      const reg=/^1[3456789]\d{9}$/
      if( !this.verifyCode || !this.phone|| !reg.test(this.phone) ){
        alert("手机号或验证码无效，请重新验证！")
        return
      }
      this.$api.account.verifyOtp({
        telephone: this.phone,
        otpCode: this.verifyCode
      }).then(res=> {
        if(res.data.data === 'success')
          this.confirmStatus = true
        else if(res.data.data === 'fail')
          alert(res.data.status)
      })
    },
    backToConfirm () {
      // to do
      // 可清空上次注册提交的信息
      this.confirmStatus = false;
    },

    agreeItems () {
      this.isAgreement = this.isAgreement ? false : true;
    },
 
    register () {
      //to do
      //注册
      if(!this.username){
        alert("用户名不能为空")
        return
      }
      if(!this.password){
        alert("密码不能为空")
        return
      }

      if(!this.phone){
        alert("手机号不能为空")
        return
      }

      if(this.isAgreement == false){
        //提示需要先同意用户协议
        alert("请先确认用户协议")
        return
      }
      if(this.password !==  this.retypePassword){
        //提示两次密码输入不一致
        alert("两次输入密码不一致")
        return
      }
      this.$api.account.registerByPhone({
        name: this.username,
        telephone: this.phone,
        password: this.password
      }).then(res => {
        alert("注册成功")
        this.$router.push("/login")
      }).catch(error => {
        console.log(error)
      })
    }
  },
  beforeDestroy() {
    $("body")[0].removeAttribute("hold-transition register-page");
  }
};
</script>
<style scoped>

</style>