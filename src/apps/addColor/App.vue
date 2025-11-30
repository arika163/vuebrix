<template>
  <div class="child-demo">
    <h2>{{ title }}</h2>

    <div style="margin-top: 20px">
      <input v-model="newColor" placeholder="输入颜色名称" />
      <button @click="addColor">添加颜色</button>
    </div>

    <ul style="display: inline-block">
      <li v-for="(color, index) in colors" :key="index" :style="{ color }">
        {{ color }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AddColor',
  data() {
    return {
      title: 'Add Color App',
      newColor: '',
      colors: ['red', 'green', 'blue']
    }
  },
  methods: {
    addColor() {
      123
      if (this.newColor.trim()) {
        this.colors.push(this.newColor.trim())
        this.newColor = ''
      }
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
}

button {
  margin-left: 10px;
}
</style>
