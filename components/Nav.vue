<template>
    <div>
        <ul>
            <li>
                <router-link to="/home">首页</router-link>
            </li>
            <li>
                <router-link to="/mine">我的</router-link>
            </li>
            <li>
                <router-link to="/shop">商城</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"Nav"
}
</script>
<style scoped>
ul{
    overflow: hidden;
    clear: both;
}
ul li{
    float: left;
    margin: 10px;
    padding: 10px;
    background: #888;
    list-style: none;
}
ul li a{
    color: #fff;
    text-decoration: none;
}
</style>