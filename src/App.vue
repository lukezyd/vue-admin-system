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
      navLocaltion:'',
      crumbsList:['首页']
    }
  }
}

</script>

<style>
*{padding: 0;margin:0;box-sizing: border-box;}
.clearfix{zoom:1;}
.clearfix:before,.clearfix:after {content: ' ';display:table;}
.clearfix:after{clear:both;visibility: hidden;font-size: 0;height: 0;}
.fl{float: left;}
.fr{float: right;}
.btn{outline: none;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html,body,#app,.main{
  width: 100%;height: 100%;position: relative;
}
</style>
