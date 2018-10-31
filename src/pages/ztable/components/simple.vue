<template>
  <div  v-loading="loading">
    <div class="ztable-search">
      <table-search @search="search" @reset="reset" ></table-search>
    </div>
    <div class="simple">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" width="50">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="age" label="年龄(月)" width="180">
        </el-table-column>
        <el-table-column prop="sex" label="性别" width="180">
        </el-table-column>
        <el-table-column prop="type" label="种类">
        </el-table-column>
        <el-table-column prop="date" label="领养时间">
        </el-table-column>
      </el-table>
      <div class="page-number">
        <el-pagination background layout="prev, pager, next" :total="1">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import { tableData } from '@/api/ztable'
import tableSearch from './search'

export default {
  components: {
    tableSearch
  },
  data() {
    return {
      copyData: [],
      tableData: [],
      loading:false
    }
  },
  mounted(){
    this.loadData();
  },
  methods: {
    loadData: function(){
       tableData().then( response => {
        this.tableData = response.catData;
        this.copyData = response.catData;
       }).catch(error => {
        console.log(error);
       });
    },
    search: function(opt) {
      this.loading = true;
      setTimeout(() => {  //加定时器是看一下loading 效果，不是必须的
        this.loading = false;
        this.tableData = this.copyData.filter(function(item) {
        return  ( item.name.toLowerCase().indexOf(opt.name) != -1 && 
                (opt.type ? item.value == opt.type : true) && 
                (opt.date ? (Date.parse(opt.date[0]) <= Date.parse(item.date) && Date.parse(item.date) <= Date.parse(opt.date[1])) : true));
                });
      },800);
    },
    reset: function() {
      this.tableData = this.copyData;
    }
  }
};
</script>
<style>
.el-table .warning-row {
  background: oldlace;
}
.el-table .success-row {
  background: #f0f9eb;
}
.page-number {
  padding: 15px;
  text-align: right;
}
</style>
