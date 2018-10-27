<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <el-menu
          :default-active="$route.path"
          :default-openeds="openeds"
          @open="handleOpen"
          @close="handleClose"
         >
        <nav-item v-for="(route,index) in navList"  data-item="route.basePath" :key="route.text" :index="route.basePath" :subIndex="route.index" :item="route" :base-path="route.path"></nav-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import navItem from './navitem'
export default {
  data() {
    return {
      // currentPath:'',
      openeds:[],
      navList:[
        {text:'首页',basePath:'/home',index:'1'},
        {text:'表格',basePath:'',index:'2',
          children:[
            {text:'初级表格',basePath:'/ztable/primary',index:'2'},
            {text:'中级表格',basePath:'/ztable/second',index:'2'},
            {text:'高级表格',basePath:'/ztable/senior',index:'2'}
          ]
        },
        {text:'表单',basePath:'',index:'3',
          children:[
            {text:'初级表单',basePath:'/zform/primary',index:'3'},
            // {text:'中级表格',basePath:'/zform/second',index:'3'},
            // {text:'高级表格',basePath:'/zform/senior',index:'3'}
          ]
        },
        {text:'图表',basePath:'/zchart',index:'4',
           children:[
            {text:'初级图表',basePath:'/zchart/complex',index:'4'},
            // {text:'中级表格',basePath:'/zform/second',index:'4'},
            // {text:'高级表格',basePath:'/zform/senior',index:'4'}
          ]
        }
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
