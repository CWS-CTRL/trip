<template>
  <div class="search-box">
    <div class="location">
      <div class="city" @click="selectCity"><span>深圳</span></div>
      <div class="position">
        <span>我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const selectCity = () => {
  router.push("/city");
};
</script>

<style lang="less" scoped>
.search-box {
  .location {
    display: grid;
    grid-template-columns: 7fr 3fr;
    align-items: center;

    height: 30px;
    font-size: 12px;

    div {
      height: 100%;
    }

    .city {
      display: grid;
      align-items: center;
      margin-left: 10px;
    }
    .position {
      display: grid;
      grid-auto-flow: column;
      place-items: center end;

      img {
        justify-self: start;
        width: 16px;
      }
    }
  }
}
</style>
