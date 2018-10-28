<template>
  <div>
    <table-search></table-search>
     <div class="table-handle">
        <el-button size="mini" type="primary" @click="">新增</el-button>
        <el-button size="mini" disabled  @click="">删除</el-button>
    </div>
    <el-table :data="tableData" :default-sort="{prop: 'age', order: 'descending'}" style="width: 100%">
      <el-table-column type="selection">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="age" label="年龄" width="180">
      </el-table-column>
      <el-table-column prop="sex" label="性别" width="180">
      </el-table-column>
      <el-table-column prop="type" label="品种" width="180">
      </el-table-column>
      <el-table-column label="日期">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="起源">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.age }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
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
import tableSearch from './searchMore'
const catData = [{
  name: '小咪1号',
  age: 2,
  sex: '女猫',
  type: '折耳猫',
  value: 1,
  date: '2018-10-12',
}, {
  name: '小咪2号',
  age: 2,
  sex: '男猫',
  type: '英短猫',
  value: 1,
  date: '2018-10-12',
}, {
  name: '小咪3号',
  age: 2,
  sex: '男猫',
  type: '折耳猫',
  value: 2,
  date: '2018-10-12',
}, {
  name: '小咪4号',
  age: 2,
  sex: '男猫',
  value: 3,
  type: '布偶猫',
  date: '2018-10-12',
}, {
  name: '小咪5号',
  age: 2,
  sex: '女猫',
  value: 4,
  type: '缅因猫',
  date: '2018-10-12',
}, {
  name: '小咪6号',
  age: 2,
  sex: '男猫',
  value: 5,
  type: '折耳猫',
  date: '2018-10-12',
}, {
  name: '小咪7号',
  age: 2,
  sex: '男猫',
  value: 6,
  type: '埃及猫',
  date: '2018-10-05',
}, {
  name: '小咪8号',
  age: 2,
  sex: '女猫',
  value: 7,
  type: '折耳猫',
  date: '2018-10-15',
}, {
  name: '小咪9号',
  age: 2,
  value: 8,
  sex: '女猫',
  type: '折耳猫',
  date: '2018-10-18',
}, {
  name: '小咪10号',
  age: 2,
  sex: '女猫',
  value: 9,
  type: '折耳猫',
  date: '2018-10-11',
}];
export default {
  data() {
    return {
      tableData: catData
    }
  },
  components: {
    tableSearch
  },
  created() {

  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};

</script>
