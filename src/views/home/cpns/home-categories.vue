<template>
  <div class="categories">
    <template v-for="(item, index) in homeCategoriesData" :key="index">
      <div class="categorie">
        <div class="banner"><img :src="item.pictureUrl" alt="" /></div>
        <div class="title">
          <span>{{ item.title }}</span>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import useHomeStore from "@/stores/modules/home";
import { storeToRefs } from "pinia";

const homeStore = useHomeStore();
homeStore.getHomeCategories();
const { homeCategoriesData } = storeToRefs(homeStore);
</script>

<style lang="less" scoped>
.categories {
  display: grid;
  grid-template-columns: repeat(v-bind("homeCategoriesData.length"), 1fr);
  margin-left: 10px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  .categorie {
    display: grid;
    place-content: center;
    place-items: center;
    width: 70px;
    height: 80px;
    font-size: 12px;
    img {
      width: 32px;
    }
  }
}
</style>
