<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <br />
      <span v-for="(app, index) in childApps" :key="app.id">
        <router-link :to="'/' + app.path">{{ app.title }}</router-link>
        <span v-if="index < childApps.length - 1"> | </span>
      </span>
    </nav>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  name: 'App',
  computed: {
    ...mapGetters({
      childApps: 'allApps'
    })
  }
})
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
