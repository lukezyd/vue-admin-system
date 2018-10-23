<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
 <!--    <el-menu
     mode="vertical"
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    > -->
    <el-menu
      default-active="1"
      @open="handleOpen"
      @close="handleClose"
    >
      <nav-item v-for="(route,index) in navList" :key="route.text" :index="String(index + 1)" :item="route" :base-path="route.path"></nav-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>

import navItem from './navitem'
export default {
  data() {
    return {
      navList:[
        {text:'首页',basePath:'/'},
        {text:'表格',basePath:'',
          children:[
            {text:'初级表格',basePath:'/ztable/primary'},
            {text:'中级表格',basePath:'/ztable/second'},
            {text:'高级表格',basePath:'/ztable/senior'}
          ]
        },
        {text:'表单',basePath:'/'},
        {text:'图表',basePath:'/'}
      ]
    }
  },
  components:{
    navItem
  },
  methods:{
    handleOpen: function(){

    },
    handleClose: function(){

    }
  }
};
</script>
