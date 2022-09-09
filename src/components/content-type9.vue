<template>
  <div class="content-type9">
    <div class="item-inner">
      <div class="img">
        <img :src="item.image.url" alt="" />
      </div>
      <div class="describe">
        <div class="summary-text">
          <span>{{ item.summaryText }}</span>
        </div>
        <div class="house-name">
          <span>{{ item.houseName }}</span>
        </div>
        <div class="commentScore">
          <span>{{ item.commentScore }}</span>
        </div>
        <div class="final-price">
          <span>{{ item.finalPrice }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style lang="less" scoped>
.content-type9 {
  width: 50%;

  padding: 5px 4px;

  .item-inner {
    position: relative;
    // overflow: hidden;
    .img {
      img {
        width: 100%;
      }
    }

    .describe {
      position: absolute;
      left: 0;
      bottom: 0;

      color: #fff;
    }
  }
}
</style>
