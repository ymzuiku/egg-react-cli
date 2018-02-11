import 'polyfill-exp'
import Vue from 'vue'
import App from './App.vue'

// socket通讯需要先启动 egg 服务: $ npm run dev
// import './socket-example'

new Vue({
  el:'#root',
  components:{App},
  template:`<App />`
})