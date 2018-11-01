<template>
  <div id="app">
      <div class="main">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data (){
    return {
    }
  }
};
</script>
<style >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}
html,body,#app,.main{
  width: 100%;height: 100%;position: relative;
}
</style>
