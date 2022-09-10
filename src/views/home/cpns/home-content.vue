<template>
  <div class="content">
    <h2 class="title">热门精选</h2>

    <div class="list">
      <template v-for="(item, index) in homeHouseListData" :key="index">
        <content-type9
          v-if="item.discoveryContentType == 9"
          :item="item.data"
        ></content-type9>
        <content-type3
          v-else-if="item.discoveryContentType == 3"
          :item="item.data"
        ></content-type3>
      </template>
    </div>
  </div>
</template>

<script setup>
import useHomeStore from "@/stores/modules/home";
import { storeToRefs } from "pinia";
import ContentType9 from "@/components/content-type9.vue";
import ContentType3 from "@/components/content-type3.vue";

const homeStore = useHomeStore();
homeStore.getHomeHouseListData().then(() => {
  console.log(homeHouseListData);
});

const { homeHouseListData } = storeToRefs(homeStore);
</script>

<style lang="less" scoped>
.content {
  margin-top: 22px;
  .list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
