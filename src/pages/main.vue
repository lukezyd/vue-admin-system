<template>
  <div id="app">
  <!--   <a href="https://github.com/eidonlon"><img style="position: absolute; top: 0; right: 0; border: 0;z-index: 999;" src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png" alt="Fork me on GitHub"></a> -->
      <admin-header></admin-header>
      <admin-nav @navToggle="navToggles"></admin-nav>
      <crumbs></crumbs>
      <div class="main-page">
        <router-view></router-view>
      </div>

      <div class="footer">
       <p>copyright ©  <span class="github-icon"><a href="https://github.com/eidonlon"><i class="fa fa-github"></i>eidonlon</a></span> 2018-10</p> 
      </div>
  </div>
</template>

<script>
import adminNav from "../components/adminNav"
import adminHeader from "../components/adminHeader"
import crumbs from "../components/crumbs/crumbs"
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
};
</script>

<style>
.main-page{
  overflow: auto;
  height: calc(100% - 100px);
}

.footer{
  position: absolute;
  width:100%;
  height:40px;
  line-height:40px;
  background: #c5c5c5;
  color: #353535;
  bottom:0;
  padding-left: 270px;
}
.footer .github-icon{
  margin:0 10px;
}
.footer .github-icon a{
  color:#ff0000;
}
.footer .github-icon .fa{margin:0 3px;}
</style>
