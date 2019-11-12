<template>
  <div class="spinner">
    <van-loading :vertical="true" type="spinner">
      认真加载中...
    </van-loading>
  </div>
</template>

<script>
export default {
  name: "spinner",
  data() {
    return {};
  }
};
</script>

<style scoped lang="less">
.spinner {
  background: #fff;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
</style>
