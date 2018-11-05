<template>
	<div class="simple-chart">
		<div class="stroke-box">
		 <div class="stroke-part01" >
			<div id="visualization"></div>
		 </div>
		 <div class="stroke-details clearfix">
		 <div class="stroke-part02 clearfix" >
			 <div class="part02-title clearfix"><span class=""><em class="trip-title-name"></em>报告明细</span></div>
			 <div class="sp2-box01 sp2-box">
			  	<div class="table01">
			  		<!-- <table class="table">
			  			<tbody>
			  				<tr><td>健康得分(分)</td><td class="text-style"><span class="t-num">90</span></td>
			  				<tr><td>体重(kg)</td><td class="text-style"><span class="t-num">21</span></td>
			  				<tr><td>身长(mm)</td><td class="text-style"><span class="t-num">12</span></td>
			  				<tr><td>血压？()</td><td class="text-style"><span class="t-num">12</span></td>
			  				<tr><td>心跳？()</td><td class="text-style"><span class="t-num">21</span></td>
			  				</tr>
			  			</tbody> -->
			  			  <el-table
			  			       :show-header="false"
						      :data="tableData"
						      style="width: 100%">
						      <el-table-column
						        prop="text"
						        >
						      </el-table-column>
						      <el-table-column
						        prop="val"
						       >
						      </el-table-column>
						    </el-table>
			  		<!-- </table> -->
			  	</div>
			  </div>
			  <div class="sp2-box02 sp2-box">
			  	<p><span class="t-text">起始时间</span><span class="t-data">21414</span></p>
			  	<p><span class="t-text">结束时间</span><span class="t-data">12414</span></p>
			  	<div class="sp2-place">'
			  		<p class="sp2-title">起始点</p>
			  	 <div class="box">
			  		<div class="start"><i class="iconfont icon-dingwei i-start"></i><p>12222222222</p></div>
			  			<div class="end"><i class="iconfont icon-dingwei i-end"></i><p>12222222</p></div>
			  		</div>
			  	</div>
			  </div>
			  <div class="sp2-box03 sp2-box">
			  	<p><span class="t-text">编号：</span><span class="t-data">21414</span></p>
			  	<p><span class="t-text">所属机构：</span><span class="t-data">124</span></p>
			  	<p><span class="t-text">车辆类型：</span><span class="t-data">124</span></p>
			  	<p><span class="t-text">绑定司机：</span><span class="t-data">124</span></p>
			  	<p><span class="t-text">手机号码：</span><span class="t-data">124</span></p>
			  </div>
		 </div>
		 <div class="stroke-part03" >
				<div class="sp3-box01 column-3-1">
				  	<div class="m-list">
				  		<ul class="clearfix">
				  			<li>
				  				<p class="num"></p>
				  				<p>1222224</p>
				  			</li>
				  			<li><p class="num">--</p><p>急转弯</p></li>
				  			<li><p class="num">--</p><p>急加速</p></li>
				  			<li><p class="num">--</p><p>急减速</p></li>
				  			<li><p class="num">--</p><p>疲劳驾驶</p></li>
				  			<li><p class="num">--</p><p>超速驾驶</p></li>
				  		</ul>
				  		<div class="chart02">
				  			<div class="s-chart02" style="width:100%;height:100%"></div>
				  		</div>
				  	</div>
				</div>
				<div class="sp3-box02">
					<div class="stroke-chart02"></div>
				</div>
			</div>
		 </div>
		<div class="stroke-part04" >
			<div id="mapStrokeArea"></div>
		 <canvas class="canvas" style="position: absolute;top:0;left: 0;z-index:9999"></canvas>
		 </div>
		</div>
	</div>
</template>
<script>
import  renderVis from './renderVis'
 export default {
 	data() {
 		return {
 			tableData:[
 				{text:'健康得分(分)',val:90},
 				{text:'体重(kg)',val:90},
 				{text:'身长(mm)',val:90},
 				{text:'血压？',val:90},
 				{text:'心跳？',val:90}
 			]
 		}
 	},
 	mounted(){
		renderVis.visSet();
	}
  };
</script>
<style scope>
.simple-chart{
	font-size: 14px;
}
.vis-item.vis-background.negative {
	background-color: rgba(82, 181, 97,.6);
	border-color: rgba(82, 181, 97,1);
}
.vis-item-content{
	color: #fff;
	background-color: rgba(82, 181, 97,1);
	width:auto !important;
}
.vis-timeline{
	border:none !important;
}
</style>