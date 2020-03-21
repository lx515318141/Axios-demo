// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from './router'
import api from './api'
// import Axios from "axios"
// import qs from "querystring"
// 在路由中引入并在拦截器中转换post要传的参数，避免在各个子组件中单独引入和转换

// Vue.prototype.$axios = Axios


// 全局的 axios 默认值
// Axios.defaults.baseURL = 'http://iwenwiki.com';
// 公共配置，当请求多个网络地址包含公共域名时可写在baseURL上
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// 配置token
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 配置请求方式


// 添加请求拦截器
// Axios.interceptors.request.use(function (config) {
//   // 在发送请求之前做些什么
//   console.log(config);
//   config.data = qs.stringify(config.data)
//   return config;
// }, function (error) {
//   // 对请求错误做些什么
//   return Promise.reject(error);
// });

// 添加响应拦截器
// Axios.interceptors.response.use(function (response) {
//   // 对响应数据做点什么
//   // 可以查看响应数据，如果需要改变格式可以在此操作
//   return response;
// }, function (error) {
//   // 对响应错误做点什么
//   return Promise.reject(error);
// });


const router = VueRouter()

Vue.prototype.$api = api

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
