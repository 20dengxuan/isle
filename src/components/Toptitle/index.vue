<template>
  <div class="toptitle">
    <h3>
      <slot></slot>
      <div></div>
    </h3>
  </div>
</template>


<style lang="less" scoped>
.toptitle {
  > h3 {
      margin:0.625rem 0;
      width:100%;
      font-size:1rem;
    text-align: center;
    > div {
      width: 2.8125rem;
      border-top: 0.155rem solid #1e6fff;
      margin: 0.4rem auto;
    }
  }
}
</style>