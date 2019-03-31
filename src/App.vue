<template>
  <div id="app">

    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Property />

  </div>
</template>

<script>
// import HelloWorld from './components/World.vue'
import Property from './components/Property.vue';

export default {
  name: 'app',
  components: {
    Property
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
