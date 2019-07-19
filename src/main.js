// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' // 导入路由文件
import store from './store' // 导入vuex文件
import api from './api' // 导入api接口
Vue.prototype.$api = api; // 将api挂载到vue的原型上

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-colorpicker'
import 'bootstrap-datepicker'
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker.css'
import 'bootstrap-daterangepicker'
import 'bootstrap-daterangepicker/daterangepicker.css'
import 'bootstrap-slider'
import 'bootstrap-timepicker'
import 'select2'

import Vuex from 'vuex'
Vue.use(Vuex)
// es6-promise
import 'es6-promise/auto'

//calendar
//import 'fullcalendar'
import 'popper.js'
import 'raphael'
//editor
//import 'ckeditor'
//AdminLTE
import './assets/css/skins/_all-skins.min.css'
import './assets/css/AdminLTE.min.css'
import './assets/js/adminlte.js'

// import 'jvectormap/jquery-jvectormap.min.js'
// import 'jvectormap/jquery-jvectormap.js'
// import 'jvectormap/lib/world-map.js'
// import 'jvectormap/jquery-jvectormap.css'
//font-awesomen
import 'inputmask'
import 'ion-rangeslider'
import 'ionicons/css/ionicons.css'

// Vue.use(AllIosIcon)
import 'font-awesome/css/font-awesome.css'
//chart
//import 'chart.js'
import 'morris.js/morris.css'
import 'morris.js/morris.js'
//jquery
import 'jquery-knob'
import 'jquery-sparkline'
import 'jquery-ui'
import 'jquery-ui/ui/widgets/sortable'
import 'jquery-slimscroll'
import 'flot'

import "./assets/css/SelfDefined.css"
//ckeditor
import CKEditor from '@ckeditor/ckeditor5-vue'
Vue.use( CKEditor );

//import 'slimscroll'
import moment from "moment"
Vue.prototype.$moment = moment;//赋值使用
moment.locale('zh-cn');//需要汉化

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
