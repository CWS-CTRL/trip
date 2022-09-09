<template>
  <div class="not-found top-page">
    <h1>404</h1>
    <h2>你好像找不到回去的路了</h2>
    <h2>点击下方按钮我帮你传送回去</h2>
    <button @click="portal">传送门</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const portal = () => {
  router.push({ path: "/home" });
};
</script>

<style lang="less" scoped>
.not-found {
  display: grid;
  place-content: center;
  place-items: center;
  font-size: 36px;

  h2 {
    font-size: 20px;
  }

  button {
    margin-top: 10px;
  }
}
</style>
