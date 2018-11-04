<template>
  <div class="zHome clearfix">
    <div class="zHome-datasum clearfix">
      <sum-data></sum-data>
    </div>
    <div class="zHome-main__chart fl">
      <main-chart></main-chart>
    </div>
    <div class="zHome-recommend fl">
      <champion></champion>
    </div>
    <div class="zHome-other__chart fl">
      <other-chart></other-chart>
    </div>
    <div class="zHome-timeline fl">
      <time-line></time-line>
    </div>
    <div class="zHome-rank fl">
      <div class="zHome-rank__head clearfix">
        <h4 class="fl">本周点击率</h4>
      </div>
      <div class="rank-table-box">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="index">
          </el-table-column>
          <el-table-column prop="name" label="猫咪种类" >
          </el-table-column>
          <el-table-column prop="num" label="数量(只)" >
          </el-table-column>
          <el-table-column label="点击率" >
            <template slot-scope="scope">
              <span><i class="rank-number" :style="scope.row.style">{{scope.row.clickNum}}</i></span>
            </template>
          </el-table-column>
          <el-table-column prop="chart" label="趋势">
            <template slot-scope="scope">
              <div class="small-chart" :id="scope.row.chart.id"></div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="zHome-aside__chart fr">
      <side-chart></side-chart>
    </div>
  </div>
</template>
<script>
import sumData from './module/sumdata'
import mainChart from './module/mainChart'
import champion from './module/champion'
import sideChart from './module/sideChart'
import otherChart from './module/otherChart'
import timeLine from './module/timeLine'

export default {
  name: "home",
  components: {
    sumData,
    mainChart,
    champion,
    sideChart, 
    otherChart,
    timeLine
  },
  data() {
    return {
      smallChartData: [],
      colorList: ['#88d6de', '#c8de88', '#deac88', '#88aade', '#a571bf', '#c3c28f', '#4cc361', '#379cbb', '#e65656'],
      tableData: [
        { name: "折耳猫", num: 20, clickNum: '23%', chart: { id: 'small-chart01', data: [1, 2, 3, 4, 5, 6, 1] }, style: { "background": "#88d6de" } },
        { name: "英短猫", num: 10, clickNum: '13%', chart: { id: 'small-chart02', data: [3, 2, 1, 2, 1, 1, 7] }, style: { "background": "#c8de88" } },
        { name: "波斯猫", num: 3, clickNum: '3%', chart: { id: 'small-chart03', data: [1, 4, 1, 5, 1, 1, 1] }, style: { "background": "#deac88" } },
        { name: "布偶猫", num: 23, clickNum: '43%', chart: { id: 'small-chart04', data: [2, 1, 6, 2, 1, 1, 1] }, style: { "background": "#88aade" } },
        { name: "短毛猫", num: 2, clickNum: '11%', chart: { id: 'small-chart05', data: [4, 1, 1, 4, 6, 1, 1] }, style: { "background": "#a571bf" } },
        { name: "挪威猫", num: 8, clickNum: '6%', chart: { id: 'small-chart06', data: [1, 2, 2, 6, 1, 5, 3] }, style: { "background": "#c3c28f" } },
        { name: "缅因猫", num: 21, clickNum: '2%', chart: { id: 'small-chart07', data: [2, 1, 3, 1, 7, 1, 6] }, style: { "background": "#4cc361" } },
        { name: "埃及猫", num: 12, clickNum: '12%', chart: { id: 'small-chart08', data: [2, 1, 5, 1, 7, 4, 1] }, style: { "background": "#379cbb" } },
        { name: "美短猫", num: 5, clickNum: '23%', chart: { id: 'small-chart09', data: [2, 1, 3, 1, 1, 1, 1] }, style: { "background": "#e65656" } },
      ],
    }
  },
  mounted: function() {},
  created() {
    var self = this;
    setTimeout(function() {
      self.drawChart();
    }, 1000);
  },
  methods: {
    addAnimation: function() {

    },
    drawChart: function() {
      var smallChartOpt = {
        title: {
          text: " ",
        },
        barWidth: 7,
        xAxis: {
          type: 'category',
        },
        grid: {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
        },
        yAxis: {
          type: 'value',
          show: false
        },
        xAxis: {
          type: 'category',
        },
        color: ["rgb(136, 214, 222)"],
        series: [{
          data: [],
          type: 'bar'
        }]
      };
      for (var i = 0; i < this.tableData.length; i++) {
        smallChartOpt.series[0].data = this.tableData[i].chart.data;
        smallChartOpt.color[0] = this.colorList[i];
        var smallChart = this.tableData[i].chart.id;
        smallChart = this.echarts.init(document.getElementById(this.tableData[i].chart.id));
        smallChart.setOption(smallChartOpt);
      }
    }
  },
  beforeDestroy() {},
};

</script>
