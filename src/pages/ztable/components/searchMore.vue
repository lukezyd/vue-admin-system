<template>
  <div class="search">
    <div class="ztable-search">
      <el-form :inline="true" ref="catForm" :model="catForm">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="catForm.name" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item label="种类" prop="type">
          <el-select v-model="catForm.type" placeholder="种类">
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
        <el-form-item label="时间" prop="date">
          <el-date-picker v-model="catForm.date" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item class="btn-box">
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button @click="resetForm('catForm')">重置</el-button>
          <el-button class="search-show-more" @click="toggleMore"><i class="fa fa-angle-down"></i>{{showText}}</el-button>
        </el-form-item>
        <div class="more-search" v-show="showMore">
          <el-form-item label="年龄">
            <el-input v-model="catForm.age" placeholder="年龄"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-select v-model="catForm.sex" placeholder="性别">
              <el-option label="男猫" value="男猫"></el-option>
              <el-option label="女猫" value="女猫"></el-option>
            </el-select>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'zsearch',
  data() {
    return {
      showMore: false,
      showText: '更多',
      catForm: {
        name: '',
        type: '',
        date: ''
      },
      formInline: {
        user: '',
        region: '',
        age: ''
      }
    }
  },
  watch: {
    showMore: function() {
      console.log(this.showMore)
      this.showMore ? this.showText = '收起' : this.showText = '更多';
    }
  },
  methods: {
    onSubmit: function() {
      if (this.catForm.name || this.catForm.type || this.catForm.date) {
        this.$emit("search", this.catForm);
      }
    },
    toggleMore: function() {
      this.showMore = !this.showMore;
    },
    resetForm: function(form) {
      this.$refs[form].resetFields();
      this.$emit("reset");
    }
  }
};

</script>
<style>
.ztable-search .el-form-item {
  width: 20%;
}

.ztable-search .el-form--inline .el-form-item__content {
  width: 80%;
}

.ztable-search .el-date-editor--daterange.el-input,
.el-date-editor--daterange.el-input__inner,
.ztable-search .el-date-editor--timerange.el-input,
.el-date-editor--timerange.el-input__inner {
  width: 100%;
}

.ztable-search .btn-box {
  width: 30% !important;
}

.search-show-more {
  border: none;
  padding: 10px 5px;
}

.search-show-more i {
  font-size: 16px;
  margin-right: 7px;
}

.search-show-more:hover {
  background: #fff;
  color: #81b38a;
}

.search-show-more:focus {
  background: #fff;
}

</style>
