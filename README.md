# Axios网络请求
https://www.kancloud.cn/yunye/axios/234845
Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。
## 1.安装
npm install axios --save 
## 2.有点
从浏览器中创建 XMLHttpRequests
从 node.js 创建 http 请求
支持 Promise API
拦截请求和响应
转换请求数据和响应数据
取消请求
自动转换 JSON 数据
客户端支持防御 XSRF
## 3.使用
```
// main.js中
import Axios from "axios"           (引入)
Vue.prototype.$axios = Axios        (挂载到原型)

// 使用的组件中                      (使用)
this.$axios.get('url')
.then(function (response) {
    console.log(response.data);
})
.catch(function (error) {
    console.log(error);
});

this.$axios.post('http://iwenwiki.com/api/blueberrypai/login.php', {
    user_id: "iwen@qq.com",
    password: 'iwen123',
    verification_code: "crfvw"
    // 要传的参数和参数名
})
.then(function (response) {
    console.log(response.data);
})
.catch(function (error) {
    console.log(error);
});

// 非快捷方案,AxiosAPI
this.$axios({
    method: 'post',
    url: '/user/12345',
    data: {
        firstName: 'Fred',
        lastName: 'Flintstone'
    }
    }).then();
        
// 合并方案
let _this = this
function getUserAccount() {
    return _this.$axios.get('/api/blueberrypai/getIndexBanner.php');
    }
    function getUserPermissions() {
    return _this.$axios.get('/api/blueberrypai/getIndexInteresting.php');
    }

    this.$axios.all([getUserAccount(), getUserPermissions()])
    .then(_this.$axios.spread(function (acct, perms) {
        // 两个请求现在都执行完成
        console.log(acct.data);
        console.log(perms.data);       
    }));

// 使用封装Axios网络请求 以下只作为测试
axios.get('http://iwenwiki.com/api/blueberrypai/getIndexBanner.php')
.then(res => {
    console.log(res.data)
})

// 局部使用api实现网络请求
api.banner.bannerData().then(res => {
    console.log(res.data)
})

// 全局使用api实现网络请求
this.$api.banner.bannerData().then(res => {
    console.log(res.data)
})

// 拦截器可以在封装的http.js中创建使用
```
## 4.封装API
## 5.跨域处理
vue 2.X版本
将config目录中的index.js文件中的proxyTable：{}，改为：
```
proxyTable: {
    "/api":{
        target:"http://localhost:3000",     (目标路径)
        pathRewrite:{                       (是否重写)
            '^/api':''                      (此时/api仅代表目标路径，若后面的''内添加子路径，则/api会代表目标路径加子路径)
        },
        changeOrigin:true                   (进行跨域处理)
    }
}
```
vue 3.X版本
在项目根目录中添加文件vue.config.js，在其中写入：
```
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                pathRewrite: {
                    '^/api': ''
                },
                changeOrigin: true
            }
        }
    },
}
```

