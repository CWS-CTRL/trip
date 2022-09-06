<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854" router>
      <template v-for="(item, index) in tabBarData" :key="item.title">
        <van-tabbar-item :to="item.path">
          <template #icon>
            <img
              v-if="currentIndex !== index"
              :src="getAssetURL(item.img)"
              alt=""
            />
            <img v-else :src="getAssetURL(item.imgActive)" alt="" />
          </template>
          <template #default>
            <span>{{ item.title }}</span>
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref } from "vue";

import { getAssetURL } from "../utils/load-assets";
import tabBarData from "../assets/data/tab-bar";

let currentIndex = ref(0);
</script>

<style lang="less" scoped>
.tab-bar {
  img {
    height: 26px;
  }
}
</style>
