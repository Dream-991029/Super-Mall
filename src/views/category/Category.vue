<template>
    <nav-bar class="category-nav">
      <div slot="left"></div>
      <div slot="center">分类</div>
      <div slot="right"></div>
    </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "Category",
  components: {NavBar}
}
</script>

<style scoped>
.category-nav {
  background-color: var(--color-tint);
  color: #fff;
}

</style>
