//src/App.vue
<template>
  <div id="app">
    <h1>Vue.js Vue CLI Image Upload Preview</h1>
    <HelloWorld/>
  </div>
</template>
 
<script>
import HelloWorld from './components/filePreview.vue'
 
export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
 
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>