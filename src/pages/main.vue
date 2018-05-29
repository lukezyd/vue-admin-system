<template>
  <div id="app">
      <admin-header></admin-header>
      <admin-nav @navToggle="navToggles"></admin-nav>
      <div class="main-page">
        <crumbs :showCrumbs="showCrumbs" :cList="crumbsList"></crumbs>
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
import adminNav from "../components/adminNav"
import adminHeader from "../components/adminHeader"
import crumbs from "../components/crumbs"
export default {
  name: 'mainPage',
  components:{
    adminNav,
    crumbs,
    adminHeader
  },
  data (){
    return {
      navLocaltion:'',
      crumbsList:['首页'],
      showCrumbs:false
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
  height: calc(100% - 60px);
}
</style>
