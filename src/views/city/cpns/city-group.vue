<template>
  <div class="group">
    <van-index-bar :index-list="indexList" :sticky="false">
      <van-index-anchor index="热门" />
      <div class="hot-citys">
        <template v-for="(item, index) in groupData.hotCities" :key="index">
          <div class="city" @click="selectCity(item)">
            <span>{{ item.cityName }}</span>
          </div>
        </template>
      </div>
      <template v-for="(item, index) in groupData.cities" :key="index">
        <van-index-anchor :index="item.group" />
        <template v-for="(item, index) in item.cities" :key="index">
          <van-cell :title="item.cityName" @click="selectCity(item)" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>
<script setup>
import { computed, defineProps } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";

import useCityStore from "@/stores/modules/city";

const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({}),
  },
});

const indexList = computed(() => {
  const list = props.groupData.cities.map((item) => item.group);
  list.unshift("#");

  return list;
});

const router = useRouter();
const cityStore = useCityStore();
const { cityData } = storeToRefs(cityStore);

const selectCity = (_cityData) => {
  cityData.value = _cityData;
  console.log(_cityData);
  router.back();
};
</script>

<style lang="less" scoped>
.group {
  height: calc(100vh - 98px);
  overflow-y: auto;
  margin-top: 10px;
  .hot-citys {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    margin: 10px 20px 10px 0;
    .city {
      display: grid;
      place-content: center;
      width: 50px;
      height: 25px;
      margin: 5px 0;
      border: 1px solid #efefef;
      border-radius: 15px;
      box-shadow: 1px 1px 1px 1px #ccc;
      font-size: 12px;
    }
  }

  :deep(.van-index-anchor) {
    background-color: #f0f0f0;
  }
}
</style>
