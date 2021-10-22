<template>
  <nav-bar class="home-nav">
    <div slot="left"></div>
    <div slot="center">购物街</div>
    <div slot="right"></div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultiData } from "network/home";

export default {
  name: "Home",
  components: {NavBar},
  created() {
    // home页数据
    getHomeMultiData().then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
