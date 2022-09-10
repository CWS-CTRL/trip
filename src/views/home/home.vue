<template>
  <div class="home">
    <home-nav-bar></home-nav-bar>
    <img src="@/assets/img/home/banner.webp" alt="" class="banner" />
    <home-search-box></home-search-box>
    <home-categories></home-categories>
    <h1 v-show="isShow">search</h1>
    <home-content></home-content>
  </div>
</template>

<script setup>
import { ref } from "vue";

import HomeNavBar from "./cpns/home-nav-bar.vue";
import HomeSearchBox from "./cpns/home-search-box.vue";
import HomeCategories from "./cpns/home-categories.vue";
import HomeContent from "./cpns/home-content.vue";

const isShow = ref(false);

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const clientHeight = document.documentElement.clientHeight;
  const scrollHeight = document.documentElement.scrollHeight;

  console.log(scrollTop, clientHeight, scrollHeight);

  if (scrollTop > 300) {
    isShow.value = true;
  } else {
    isShow.value = false;
  }
});
</script>

<style lang="less" scoped>
.home {
  .banner {
    width: 100vw;
  }
}
</style>
