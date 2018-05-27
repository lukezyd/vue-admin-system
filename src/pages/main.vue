<template>
  <div id="app">
     <div class="nav" v-bind:class="navLocaltion">
        <adminNav @navToggle="navToggles"></adminNav>
        <!-- <div class="nav-setting" @click="changenav()"><i class="el-icon-setting"></i></div> -->
      </div>
      <div class="main-page">
        <crumbs :cList="crumbsList"></crumbs>
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
import adminNav from "../components/adminNav"
import crumbs from "../components/crumbs"
export default {
  name: 'mainPage',
  components:{
    adminNav,
    crumbs
  },
  data (){
    return {
      navLocaltion:'',
      crumbsList:['首页']
    }
  },
  created : function(){
      this.navLocaltion = localStorage.getItem(this.$store.state.siteId + "_nav") || "nav-left"
  },
  methods : {
      changenav : function(){
        if(this.navLocaltion == "nav-left"){
          this.navLocaltion = "nav-top";
          localStorage.setItem(this.$store.state.siteId + "_nav","nav-top");
        }else{
          this.navLocaltion = "nav-left";
          localStorage.setItem(this.$store.state.siteId + "_nav","nav-left");
        }
      },
      navToggles: function(options){
        if(options){
          this.navLocaltion = "nav-left"
        }else{
          this.navLocaltion = "nav-icon nav-left";
        }
      }
    }
}

</script>

<style>
.main-page{
  overflow: auto;
  height: 100%;
}
.nav{
    background: #616967;
    height: 100%;
    position: relative;
  }
  .nav-left{
    float: left;
    width: 210px;
    max-width: 350px;
    height: 100%;
  }
  .nav-top{
    height: 60px;
    width: 100%;
  }
  .nav-icon{
    margin-left: -15%;
  }
  .nav-icon .nav-toggle{
    margin-right: 14px;
  }
  .nav-setting{
    display: inline-block;
    width: 100%;
    height: 30px;
    line-height: 30px;
      background: #848484;
      right: 0;
      bottom: 0;
      color: #ddd;
      position: absolute;
      cursor:pointer; 
      background-color: #ddd;
  }
  .nav-setting i{
    font-size: 20px;
  }
</style>
