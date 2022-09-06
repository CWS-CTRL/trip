<template>
  <div class="city top-page">
    <form action="/">
      <van-search
        v-model="searchValue"
        show-action
        placeholder="城市/区域/位置"
        shape="round"
        @cancel="onCancel"
      />
    </form>
    <van-tabs v-model:active="active">
      <template v-for="index in 2" :key="index">
        <van-tab title="index"
          ><van-index-bar>
            <van-index-anchor index="A" />
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-cell title="文本" />

            <van-index-anchor index="B" />
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-cell title="文本" /> </van-index-bar
        ></van-tab>
      </template>
    </van-tabs>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import useCityStore from "@/stores/modules/city";
import { storeToRefs } from "pinia";

const router = useRouter();
const searchValue = ref("");
const active = ref(0);

const cityStore = useCityStore();
cityStore.getCityAllData();

const { cityAllData } = storeToRefs(cityStore);
setTimeout(() => {
  console.log(cityAllData.value);
}, 1000);

const onCancel = () => {
  router.back();
};
</script>

<style lang="less" scoped></style>
