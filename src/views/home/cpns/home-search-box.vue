<template>
  <div class="search-box">
    <div class="location">
      <div class="city" @click="selectCity">
        <span>{{ cityData.cityName }}</span>
      </div>
      <div class="position">
        <span>我的位置</span>
        <i class="iconfont icon-shouye"></i>
      </div>
    </div>

    <div class="select-time" @click="show = true">
      <div class="start">
        <span class="small-shallow">入住</span>
        <span>{{ startDate }}</span>
      </div>
      <div class="stay">
        <span>共{{ stayCount }}晚</span>
      </div>
      <div class="end">
        <span class="small-shallow">离开</span>
        <span>{{ endDate }}</span>
      </div>
    </div>
    <van-calendar v-model:show="show" type="range" @confirm="onConfirm" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";

import { getMD, getTourD } from "@/utils/format-date";

import useCityStore from "@/stores/modules/city";

const cityStore = useCityStore();
const { cityData } = storeToRefs(cityStore);

const router = useRouter();
const selectCity = () => {
  router.push("/city");
};

const show = ref(false);

const nowDate = new Date();
const newDate = new Date();
newDate.setDate(nowDate.getDate() + 1);
const startDate = ref(getMD(nowDate));
const endDate = ref(getMD(newDate));
const stayCount = ref(getTourD(nowDate, newDate));

const onConfirm = (value) => {
  const start = value[0];
  const end = value[1];
  startDate.value = getMD(start);
  endDate.value = getMD(end);
  stayCount.value = getTourD(start, end);
  show.value = false;
};
</script>

<style lang="less" scoped>
.search-box {
  padding: 10px 10px 0;

  .location {
    display: grid;
    grid-template-columns: 7fr 3fr;
    align-items: center;

    height: 30px;
    font-size: 12px;
    border-bottom: 1px solid #000;

    div {
      height: 100%;
    }

    .city {
      display: grid;
      align-items: center;
      font-size: 15px;
      font-weight: 600;
    }
    .position {
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: 8fr 2fr;
      place-items: center end;

      i {
        justify-self: start;
        font-size: 16px;
        color: var(--primary-color);
      }
    }
  }

  .select-time {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 10px;

    .start,
    .stay,
    .end {
      display: grid;
      row-gap: 5px;
      // place-content: center;
      // grid-auto-flow: c;
    }

    .stay {
      align-content: center;
      font-size: 12px;
    }
  }
}
</style>
