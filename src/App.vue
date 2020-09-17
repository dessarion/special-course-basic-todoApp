<template>
  <div id="app">
    <h1>Basic exercise</h1>
    <hr>
    <router-view />    
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
  body{
    font-family: 'Open Sans Condensed', sans-serif;
  }
  h1{
    text-align: center;
  }
  
</style>
