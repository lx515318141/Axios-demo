# Axios网络请求
    https://www.kancloud.cn/yunye/axios/234845
    Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。
## 1.安装
    npm install axios --save 
## 2.使用
    import Axios from "axios"           (引入)
    Vue.prototype.$axios = Axios        (挂载原型)
    this.$axios.xxx                     (使用)
## 3.封装API
## 4.跨域处理
    vue 2.X版本
        将config目录中的index.js文件中的proxyTable：{}，改为：
        proxyTable: {
            "/api":{
                target:"http://localhost:3000",     (目标路径)
                pathRewrite:{                       (是否重写)
                    '^/api':''                      (此时/api仅代表目标路径，若后面的''内添加子路径，则/api会代表目标路径加子路径)
                },
                changeOrigin:true                   (进行跨域处理)
            }
        }
    vue 3.X版本
        在项目根目录中添加问价vue.config.js，在其中写入：
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
    

