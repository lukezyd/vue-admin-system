<template>
  <div id="app">
    <a href="https://github.com/eidonlon"><img style="position: absolute;bottom: -19px;border: 0px;right: -45px;z-index:998" src="https://s3.amazonaws.com/github/ribbons/forkme_left_darkblue_121621.png" alt="Fork me on GitHub"></a>
      <admin-header></admin-header>
      <admin-nav ></admin-nav>
      <crumbs></crumbs>
        <div class="main-page">
          <el-scrollbar wrapClass="scrollbar-wrapper"  tag="div" style="height:100%;">
            <router-view></router-view>
          </el-scrollbar>
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
    return {}
    },
    created: function(){},
    methods: {
    }
};
</script>

<style>
.main-page{
    overflow: hidden;
    height: calc(100% - 100px);
}
.footer{
    position: absolute;
    width: 100%;
    height: 25px;
    line-height: 25px;
    background: #2a3542;
    z-index: 999;
    color: #fff;
    bottom: 0;
    padding-left: 270px;
    font-size: 14px;
}
.footer .github-icon{
    margin:0 10px;
}
.footer .github-icon a{
    color:#ff0000;
}
.footer .github-icon .fa{margin:0 3px;}
</style>
