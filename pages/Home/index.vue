<template>
    <div>
        Home
    </div>
</template>

<script>
// import api from "../../api"
// import axios from "../../utils/http"
// import qs from "querystring"
// post传的参数是对象格式的，无法被接受，需要转换为字符串，但是如果写在子组件里每个都要单独引入和转换，所以最好写在路由里的拦截器里面
export default {
    name:"Home",
    mounted(){
        // 快捷方案
        // this.$axios.get('http://iwenwiki.com/api/blueberrypai/getIndexBanner.php')
        //     .then(function (response) {
        //         console.log(response.data);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
        // this.$axios.post('http://iwenwiki.com/api/blueberrypai/login.php', {
        //         user_id: "iwen@qq.com",
        //         password: 'iwen123',
        //         verification_code: "crfvw"
        //         // 要传的参数和参数名
        //     })
        //     .then(function (response) {
        //         console.log(response.data);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
        

        // 非快捷方案,AxiosAPI
        // this.$axios({
        //     method: 'post',
        //     url: '/user/12345',
        //     data: {
        //         firstName: 'Fred',
        //         lastName: 'Flintstone'
        //     }
        //     });
        
        // 合并方案
        // let _this = this
        // function getUserAccount() {
        //     return _this.$axios.get('/api/blueberrypai/getIndexBanner.php');
        //     }

        //     function getUserPermissions() {
        //     return _this.$axios.get('/api/blueberrypai/getIndexInteresting.php');
        //     }

        //     this.$axios.all([getUserAccount(), getUserPermissions()])
        //     .then(_this.$axios.spread(function (acct, perms) {
        //         // 两个请求现在都执行完成
        //         console.log(acct.data);
        //         console.log(perms.data);
                
                
        //     }));

        // 使用封装Axios网络请求 以下只作为测试
        // axios.get('http://iwenwiki.com/api/blueberrypai/getIndexBanner.php')
        // .then(res => {
        //     console.log(res.data)
        // })
        
        // 局部使用api实现网络请求
        // api.banner.bannerData().then(res => {
        //     console.log(res.data)
        // })

        // 全局使用api实现网络请求
        // this.$api.banner.bannerData().then(res => {
        //     console.log(res.data)
        // })
    }
}
</script>