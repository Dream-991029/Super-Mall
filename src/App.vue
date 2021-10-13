<template>
  <div>
    <tab-bar>
      <tab-bar-item>
        <img slot="item_icon" src="./assets/img/tabbar/home.svg" alt="">
        <img slot="item_icon_active" src="./assets/img/tabbar/home.svg" alt="">
        <div slot="item_text">首页</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item_icon" src="./assets/img/tabbar/category.svg" alt="">
        <img slot="item_icon" src="./assets/img/tabbar/category.svg" alt="">
        <div slot="item_icon_active">分类</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item_icon" src="./assets/img/tabbar/shopcart.svg" alt="">
        <img slot="item_icon" src="./assets/img/tabbar/shopcart.svg" alt="">
        <div slot="item_icon_active">购物车</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item_icon" src="./assets/img/tabbar/profile.svg" alt="">
        <img slot="item_icon" src="./assets/img/tabbar/profile.svg" alt="">
        <div slot="item_icon_active">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/content/tabbar/TabBar";
import TabBarItem from "components/content/tabbar/TabBarItem";

export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>
