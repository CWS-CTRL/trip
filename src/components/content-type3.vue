<template>
  <div class="content-type3">
    <div class="item-inner">
      <div class="img">
        <img :src="item.image.url" alt="" />
      </div>
      <div class="describe">
        <div class="location">
          <i class="iconfont icon-shouye"></i>
          <span>{{ item.location }}</span>
        </div>
        <div class="house-name">
          <span>{{ item.houseName }}</span>
        </div>
        <div class="summary-text">
          <span>{{ item.summaryText }}</span>
        </div>
        <div class="price">
          <div class="final-price">
            <span>¥{{ item.finalPrice }}</span>
          </div>
          <div class="product-price">
            <del>¥{{ item.productPrice }}</del>
          </div>
          <div class="preferential" :style="{}">
            <span>{{ item.priceTipBadge.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style lang="less" scoped>
.content-type3 {
  // width: 100%;
  box-sizing: border-box;
  padding: 5px 4px 5px 2px;

  .item-inner {
    position: relative;
    .img {
      img {
        width: 100%;
      }
    }

    .describe {
      position: absolute;
      padding: 2px 4px;
      > div {
        margin: 4px 0;
      }

      .location {
        color: #666;
        font-size: 12px;
      }

      .house-name {
        color: #333;
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .summary-text {
        font-size: 12px;
        color: #666;
      }
      .price {
        display: grid;
        grid-auto-flow: column;
        justify-content: start;
        column-gap: 5px;
        font-size: 14px;
        .final-price {
          color: #ff9645;
        }

        .product-price {
          color: #999;
        }
        .preferential {
          padding: 0 6px;
          border-radius: 8px;
          background-image: linear-gradient(270deg, #f66, #ff9f9f);
          color: #fff;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
