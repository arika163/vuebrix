<template>
  <div class="child-demo">
    <div class="animated-title">{{ title }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HelloWorld',
  data() {
    return {
      title: 'Hello World'
    }
  }
})
</script>

<style lang="less" scoped>
.child-demo {
  font-family: Arial, sans-serif;
  padding: 20px;
  border: 2px dashed #42b983;
  margin: 10px;
  position: relative;
  height: 200px;

  .animated-title {
    width: 200px;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 36px;
    font-weight: bold;
    text-align: center;
    color: #42b983;
    animation: glowScale 2s ease-in-out infinite alternate;
    will-change: transform, text-shadow;
  }

  @keyframes glowScale {
    0% {
      transform: translate(-50%, -50%) scale(1);
      color: #42b983;
      text-shadow: 0 0 5px #42b983;
    }
    50% {
      transform: translate(-50%, -50%) scale(2);
      color: #f7dc6f;
      text-shadow: 0 0 15px #f7dc6f;
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
      color: #42b983;
      text-shadow: 0 0 5px #42b983;
    }
  }
}
</style>
