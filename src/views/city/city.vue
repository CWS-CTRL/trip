<template>
  <div class="city top-page">
    <div class="top">
      <form action="/">
        <van-search
          v-model="searchValue"
          show-action
          placeholder="城市/区域/位置"
          shape="round"
          @cancel="onCancel"
        />
      </form>
    </div>

    <div class="content">
      <van-tabs v-model:active="tabActive" sticky offset-top="54">
        <template v-for="(value, key, index) in cityAllData" :key="index">
          <van-tab :title="value.title" :name="key">
            <city-group v-show="tabActive === key" :group-data="value">
            </city-group>
          </van-tab>
        </template>
      </van-tabs>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, watchEffect } from "vue";
import { useRouter } from "vue-router";
import useCityStore from "@/stores/modules/city";
import { storeToRefs } from "pinia";
import CityGroup from "./cpns/city-group.vue";

const router = useRouter();
const searchValue = ref("");
const tabActive = ref();

const cityStore = useCityStore();
cityStore.getCityAllData();

const { cityAllData } = storeToRefs(cityStore);

const onCancel = () => {
  router.back();
};
</script>

<style lang="less" scoped>
.city {
  overflow: hidden;
  .top {
    height: 54px;
    //防止索引栏向上滑动时遮住标题
    position: relative;
    z-index: 9;
  }
  .content {
    height: calc(100vh - 54px);
    :deep(.van-tab__text) {
      font-size: 15px;
      font-weight: 600;
    }
    // overflow-y: auto;
  }
}
</style>
