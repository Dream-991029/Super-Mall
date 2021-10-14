<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item_icon"></slot>
    </div>
    <div v-else>
      <slot name="item_icon_active"></slot>
    </div>
    <div :style="isActiveStyle">
      <slot name="item_text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: '#ff5777'
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    isActiveStyle () {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick () {
      this.$router.push(this.path)
    }
  }
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
