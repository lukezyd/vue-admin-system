<template>
  <div>
    <table-search @search="search" @reset="reset"></table-search>
    <div class="table-handle">
        <el-button size="mini" type="primary" @click="">新增</el-button>
        <el-button size="mini" disabled  @click="">删除</el-button>
    </div>
    <el-table  :data="tableData" :default-sort="{prop: 'age', order: 'descending'}" style="width: 100%">
      <el-table-column type="selection">
      </el-table-column>
      <el-table-column prop="name" label="姓名" >
      </el-table-column>
      <el-table-column prop="age" label="年龄" >
      </el-table-column>
      <el-table-column prop="sex" label="性别" >
      </el-table-column>
      <el-table-column prop="type" label="品种" width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>{{ scope.row.mark }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.type }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="日期">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="备注" prop="mark">
      </el-table-column>
      <el-table-column width="180" label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  import _ from 'lodash'
import { tableData } from '@/api/ztable'
import tableSearch from './searchMore'

export default {
  data() {
    return {
      tableData:[],
      copyData:[]
    }
  },
  components: {
    tableSearch
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
        console.log(error)
       })
    },
    handleEdit: function(index, row) {
      console.log(index, row);
    },
    handleDelete: function(index, row) {
      this.$confirm('确定要删除么?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then( () => {
               var index = _.findIndex(this.tableData, function(o) { return o.id == row.id; });
              this.tableData.splice(index,1);
              this.$message({
                  type: 'success',
                  message: '删除成功!'
               });
            }).catch(error => {
              this.$message({
                type: 'info',
                message: '已取消'
              }); 
            });
    },
    search: function(opt) {
      this.tableData = this.copyData.filter(function(item) {
        return  ( item.name.toLowerCase().indexOf(opt.name) != -1 && 
                  (opt.type ? item.value == opt.type : true) && 
                  (opt.date ? (Date.parse(opt.date[0]) <= Date.parse(item.date) && Date.parse(item.date) <= Date.parse(opt.date[1])) : true));
      });
    },
    reset: function() {
      console.log(this.copyData)
      this.tableData = this.copyData;
    }
  }
};

</script>
