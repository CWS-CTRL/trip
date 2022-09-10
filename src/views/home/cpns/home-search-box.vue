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
    <div class="limit mid-shallow">
      <div class="people"><span>价格不限</span></div>
      <div></div>
      <div class="price"><span>人数不限</span></div>
    </div>
    <div class="keyword mid-shallow"><span>关键字/位置/名宿名</span></div>
    <div class="hot-suggests">
      <template v-for="(item, index) in homeHotSuggestsData" :key="index">
        <div
          class="suggest"
          :style="{
            color: item.tagText.color,
            background: item.tagText.background.color,
          }"
        >
          {{ item.tagText.text }}
        </div>
      </template>
    </div>
    <div class="search">
      <div class="btn">开始搜索</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";

import { getMD, getTourD } from "@/utils/format-date";

import useCityStore from "@/stores/modules/city";
import useHomeStore from "@/stores/modules/home";

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

const homeStore = useHomeStore();
homeStore.getHomeHotSuggestsData();

const { homeHotSuggestsData } = storeToRefs(homeStore);
</script>

<style lang="less" scoped>
.search-box {
  padding: 0 10px 0;
  > div {
    height: 40px;
    border-bottom: 1px solid #faf8f9;
  }

  .location {
    display: grid;
    grid-template-columns: 7fr 3fr;
    align-items: center;

    font-size: 12px;

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

  .limit {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    font-size: 14px;
  }

  .keyword {
    display: grid;
    align-items: center;
    font-size: 14px;
  }

  .hot-suggests {
    height: auto;
    display: flex;
    flex-wrap: wrap;

    font-size: 14px;
    margin: 10px 0;
    .suggest {
      margin: 4px 8px;
      padding: 2px 4px;
      border-radius: 50%;
    }
  }

  .search {
    display: grid;
    grid-template: 90%/80%;
    place-content: center;
    .btn {
      display: grid;
      place-content: center;
      border-radius: 16px;
      background-image: linear-gradient(to right, #000 0%, #00ffff 50%);
      font-size: 20px;
      font-weight: 700;
    }
  }
}
</style>
