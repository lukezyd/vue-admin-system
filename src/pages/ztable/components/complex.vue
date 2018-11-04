<template>
  <div v-loading="loading">
    <table-search @search="search" @reset="reset"></table-search>
    <div class="table-handle">
      <el-button size="mini" type="primary" @click="toForm">新增</el-button>
      <el-button size="mini" v-show="deleteList.length" @click="deleteAll">删除</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%" @cell-click="toDetails" @select="selectRow" @select-all="selectRow">
      <el-table-column type="selection"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
      <el-table-column prop="sex" label="性别"></el-table-column>
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
      <el-table-column label="备注" prop="mark"></el-table-column>
      <el-table-column width="180" label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="page-number">
      <el-pagination background layout="prev, pager, next" :total="1">
      </el-pagination>
    </div>
    <el-dialog title="编辑信息" :visible.sync="dialogFormVisible" class="edit-box">
      <el-form :model="editForm" :inline="true">
        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input v-model="editForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄" :label-width="formLabelWidth">
          <el-input v-model="editForm.age" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth">
          <el-select placeholder="种类" v-model="editForm.sex">
            <el-option label="男猫" value="男猫"></el-option>
            <el-option label="女猫" value="女猫"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="品种" :label-width="formLabelWidth">
          <el-select v-model="editForm.type" placeholder="请选择品种">
            <el-option label="折耳猫" value="1"></el-option>
            <el-option label="英短猫" value="2"></el-option>
            <el-option label="波斯猫" value="3"></el-option>
            <el-option label="布偶猫" value="4"></el-option>
            <el-option label="短毛猫" value="5"></el-option>
            <el-option label="挪威猫" value="6"></el-option>
            <el-option label="缅因猫" value="7"></el-option>
            <el-option label="埃及猫" value="8"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="领养日期" :label-width="formLabelWidth">
          <el-date-picker v-model="editForm.date" type="date" value-format="yyyy-MM-dd" placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        </el-form-item>
        <el-form-item label="备注" :label-width="formLabelWidth">
          <el-input v-model="editForm.mark" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="editSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import _ from 'lodash'
import { tableData } from '@/api/ztable'
import tableSearch from './searchMore'

export default {
  data() {
    return {
      tableData: [],
      copyData: [],
      loading: false,
      dialogTableVisible: false,
      dialogFormVisible: false,
      formLabelWidth: '120px',
      labelPosition: '',
      editIndex: '',
      deleteList: [],
      editForm: {
        name: '',
        age: '',
        type: '',
        value: '',
        sex: '',
        date: '',
        mark: ''
      }
    }
  },
  components: {
    tableSearch
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData: function() {
      tableData().then(response => {
        this.tableData = response.catData;
        this.copyData = response.catData;
      }).catch(error => {
        console.log(error)
      });
    },
    handleEdit: function(index, row) {
      this.dialogFormVisible = true;
      this.editIndex = index;
      this.editForm = this.tableData[index];
    },
    handleDelete: function(index, row) {
      this.$confirm('你确定要删除么?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        var index = _.findIndex(this.tableData, function(o) { return o.id == row.id; });
        this.tableData.splice(index, 1);
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
      this.loading = true;
      setTimeout(() => { //加定时器是看一下loading 效果，不是必须的
        this.loading = false;
        this.tableData = this.copyData.filter(function(item) {
          return (item.name.toLowerCase().indexOf(opt.name) != -1 &&
            (opt.type ? item.value == opt.type : true) &&
            (opt.date ? (Date.parse(opt.date[0]) <= Date.parse(item.date) && Date.parse(item.date) <= Date.parse(opt.date[1])) : true));
        });
      }, 800);
    },
    reset: function() {
      this.tableData = this.copyData;
    },
    editSubmit: function() {
      this.dialogFormVisible = false;
      this.$set(this.tableData[this.editIndex], this.editForm);
      this.$message({
        type: 'success',
        message: '修改成功!'
      });
    },
    toDetails: function(row, column, cell, event) {
      console.log(row.id);
      // this.$router.push('/ztable/details/'+row.id);
    },
    selectRow: function(selection, row) {
      this.deleteList = selection;
    },
    deleteAll: function() {
      this.$confirm('你确定要删除么?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log("ok")
        for (var i = 0; i < this.deleteList.length; i++) {
          var self = this;
          var index = _.findIndex(self.tableData, function(o) { return o.id == self.deleteList[i].id; });
          this.tableData.splice(index, 1);
        }
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
    toForm: function(){
        this.$router.push('/zform/primary');
    }
  }
};

</script>
<style>
.edit-box .el-select {
  width: 202px;
}

.edit-box .el-form--inline .el-form-item__label {
  text-align: center;
  width: 80px !important;
}

.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 202px;
}

.table-handle {
  margin-bottom: 10px;
}

</style>
