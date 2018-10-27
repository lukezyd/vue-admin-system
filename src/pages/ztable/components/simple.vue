<template>
  <div>
     <div class="ztable-search">
      <table-search @search="search" @reset="reset"></table-search>
    </div>
    <div class="simple">
       <el-table
          :data="tableData"
          style="width: 100%"
         >
          <el-table-column
              type="index"
              width="50">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="age"
            label="年龄(月)"
            width="180">
          </el-table-column>
           <el-table-column
            prop="sex"
            label="性别"
            width="180">
          </el-table-column>
          <el-table-column
            prop="type"
            label="种类">
          </el-table-column>
           <el-table-column
            prop="date"
            label="领养时间">
          </el-table-column>
        </el-table>
        <div class="page-number">
          <el-pagination
          background
          layout="prev, pager, next"
          :total="122">
        </el-pagination>
        </div>
    </div>
  </div>
</template>
<script>
  import tableSearch from './search'

  const catData =[{
          name: '小咪1号',
          age:2,
          sex:'女猫',
          type:'折耳猫',
          value:1,
          date: '2018-10-12',
        },{
          name: '小咪2号',
          age:2,
          sex:'男猫',
          type:'英短猫',
          value:1,
          date: '2018-10-12',
        },{
          name: '小咪3号',
          age:2,
          sex:'男猫',
          type:'折耳猫',
           value:2,
          date: '2018-10-12',
        },{
          name: '小咪4号',
          age:2,
          sex:'男猫',
          value:3,
          type:'布偶猫',
          date: '2018-10-12',
        },{
          name: '小咪5号',
          age:2,
          sex:'女猫',
          value:4,
          type:'缅因猫',
          date: '2018-10-12',
        },{
          name: '小咪6号',
          age:2,
          sex:'男猫',
          value:5,
          type:'折耳猫',
          date: '2018-10-12',
        },{
          name: '小咪7号',
          age:2,
          sex:'男猫',
           value:6,
          type:'埃及猫',
          date: '2018-10-12',
        },{
          name: '小咪8号',
          age:2,
          sex:'女猫',
          value:7,
          type:'折耳猫',
           date: '2018-10-12',
        },{
          name: '小咪9号',
          age:2,
          value:8,
          sex:'女猫',
          type:'折耳猫',
          date: '2018-10-12',
        },{
          name: '小咪10号',
          age:2,
          sex:'女猫',
          value:9,
          type:'折耳猫',
          date: '2018-10-12',
        }];

  export default {
    components:{
      tableSearch
    },
    data() {
      return {
        copyData:[],
        tableData: catData
      }
    },
    methods: {
      search: function(opt){
        this.tableData = catData.filter(function (item) {
          return  (item.name.toLowerCase().indexOf(opt.name) != -1 && item.value == opt.type)
        });
      },
      reset: function(){
        this.tableData = catData;
      }
    }
  }
</script>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }

  .page-number{
    padding: 15px;text-align: right;
  }
</style>