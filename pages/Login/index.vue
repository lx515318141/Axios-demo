<template>
    <div>
        Login
        <button @click="clickHandler">登录</button>
    </div>
</template>
<script>
export default {
    name:"Login",
    methods:{
        clickHandler(){
            this.$api.login.logined({
                username:"iwen",
                password:"123"
            }).then(res => {
                console.log(res.data)
                // 存储信息
                localStorage.setItem("token",res.data.token)
                localStorage.setItem("user",res.data.user)
                //回到上一级页面
                this.$router.push("/mine")
                
            })
        }
    }
}
</script>