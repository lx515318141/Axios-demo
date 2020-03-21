<template>
    <div>
        Shop
    </div>
</template>
<script>
export default {
    name:"Shop",
    mounted(){
        this.$api.shoplist.shoplistData().then(res => {
            console.log(res.data);
            console.log(typeof localStorage.getItem("token"))
        })
    }
}
</script>