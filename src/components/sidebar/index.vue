<template>
    <el-menu
          :default-active="$route.path"
          :default-openeds="openeds"
          @open="handleOpen"
          @close="handleClose"
         >
        <nav-item v-for="(route,index) in navList"  data-item="route.basePath" :key="route.text" :index="route.basePath" :subIndex="route.index" :item="route" :base-path="route.path"></nav-item>
    </el-menu>
</template>

<script>
import navItem from './navitem'
export default {
  data() {
    return {
      openeds:[],
      navList:[
        {text:'首页',basePath:'/home',index:'1',icon:'fa-dashboard'},
        {text:'表格',basePath:'',index:'2',icon:'fa-calculator',
          children:[
            {text:'查询表格',basePath:'/ztable/primary',index:'2',icon:'fa-calculator'},
            {text:'综合表格',basePath:'/ztable/second',index:'2',icon:'fa-calculator'}
          ]
        },
        {text:'表单',basePath:'',index:'3',icon:'fa-credit-card-alt',
          children:[
            {text:'初级表单',basePath:'/zform/first',index:'3'}
          ]
        },
        {text:'图表',basePath:'/zchart',index:'4',icon:'fa-bar-chart',
          children:[
            {text:'用户量分布',basePath:'/zchart/mapChart',index:'4'},
            // {text:'猫咪详细报告',basePath:'/zchart/catChart',index:'4'}
          ]
        },
        {text:'404',basePath:'/notFound',index:'5',icon:'fa-map-signs'}
      ]
    }
  },
  components:{
    navItem
  },
  created(){
    for(var i=0;i< this.navList.length;i++){
      if(this.navList[i].children){
        var children = this.navList[i].children;
        for(var j=0;j < children.length;j++){
          if(children[j].basePath === this.$route.path){
            this.openeds = [j];
          }
        }
      }
    }
    this.openeds = [this.$route.fullPath];
  },
  methods:{
    handleOpen: function(){

    },
    handleClose: function(){

    }
  }
};
</script>
