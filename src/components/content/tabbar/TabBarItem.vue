<template>
  <div class="tab-bar-item">
    <slot name="item_icon"></slot>
    <slot name="item_icon_active"></slot>
    <slot name="item_text"></slot>
  </div>
</template>

<script>
export default {
  name: "TabBarItem"
}
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    height: 49px;
    text-align: center;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin: 3px 0 2px 0;
    vertical-align: middle;
  }
</style>
