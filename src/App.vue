<template>
  <div class="app">
    <router-view></router-view>
    <tab-bar></tab-bar>
  </div>
</template>

<script setup>
import TabBar from "./components/tab-bar.vue";
</script>

<style lang="less" scoped>
.app {
  padding-bottom: 50px;
}
</style>
