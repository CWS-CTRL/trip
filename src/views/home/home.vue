<template>
  <div class="home">
    <home-nav-bar></home-nav-bar>
    <img src="@/assets/img/home/banner.webp" alt="" class="banner" />
    <home-search-box></home-search-box>
  </div>
</template>

<script setup>
import HomeNavBar from "./cpns/home-nav-bar.vue";
import HomeSearchBox from "./cpns/home-search-box.vue";
</script>

<style lang="less" scoped>
.home {
  .banner {
    width: 100vw;
  }
}
</style>
