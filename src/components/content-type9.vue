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
          {{ item.houseName }}
        </div>
        <div class="costPerformance">
          <div class="commentScore">
            <van-rate
              :model-value="Number(item.commentScore)"
              color="#fff"
              :size="15"
              readonly
              allow-half
            />
          </div>
          <div></div>
          <div class="final-price">
            <span>¥{{ item.finalPrice }}</span>
          </div>
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
  // width: 50%;
  box-sizing: border-box;
  padding: 5px 2px 5px 4px;

  .item-inner {
    position: relative;
    // overflow: hidden;
    .img {
      img {
        width: 100%;
      }
    }

    .describe {
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 10px;
      color: #fff;
      font-size: 14px;
      box-sizing: border-box;
      padding: 0 10px;
      .house-name {
        margin: 5px 0px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .commentScore {
        display: grid;
      }
      .costPerformance {
        display: grid;

        grid-auto-flow: column;
        .final-price {
          justify-self: end;
        }
      }
    }
  }
}
</style>
