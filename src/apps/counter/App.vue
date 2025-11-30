<template>
  <div class="child-demo">
    <h2>{{ title }}</h2>

    <div style="margin-bottom: 20px">
      <button @click="count++">Count: {{ count }}</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Counter',
  data() {
    return {
      title: 'Counter App',
      count: 0
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
</style>
