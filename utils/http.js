// 封装Axios
import axios from "axios"
import qs from "querystring"
import router from "../router"


// 跳转登录页面函数
const toLogin = ()=>{
    router.push({
        path:'/login'
    })
}

// 错误信息处理
const errorHandler = (status, message) => {
    switch(status){
        case 400:
            console.log("信息校验失败");
            break
        case 401:
            // 一般401是用户名密码有问题或没登录，所有需要去登录
            toLogin()
            console.log("认证失败")
            break
        case 403:
            toLogin()
            // 一般是因为token过期了
            // 清除token存储
            localStorage.removeItem("token")
            console.log("token校验失败")
            break
        case 404:
            console.log("请求资源失败")
            break
        default:
            console.log(message)
            break
    }
}


// 创建axios实例
var instance = axios.create({ timeout: 5000 });
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
instance.defaults.headers.common['Authorization'] = localStorage.getItem("token")
// 根据项目需求决定token在什么位置配置，如果网址所有接口都需要token，则在全局中写，若不是都需要则要分开写

// 创建请求拦截器
instance.interceptors.request.use(function(config){
    // 在发送请求之前做些什么
    // 判断post请求需要qs转化
    if(config.method === 'post'){
        
        config.data = qs.stringify(config.data)
    }
    // if(token){
    //     config.headers.Authorization = token
    // }
    // 如果不需要全局都需要token，则可以写在拦截器里
    
    return config;
},function(error){
    return Promise.reject(error)
})

// 创建响应拦截器
instance.interceptors.response.use(
    // 对响应数据做点什么
    // 可以查看响应数据，如果需要改变格式可以在此操作
    res => res.status ===200 ? Promise.resolve(res) : Promise.reject(res), 
    error =>{
        const { response } = error
        if(response){
            errorHandler(response.status, response.data.message)
            return Promise.reject(response)
        }else{
            console.log("断网了")
        }
    }
  );



export default instance