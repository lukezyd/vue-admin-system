// import echarts from 'echarts'
import 'echarts/map/js/world.js'
import countries from '@/utils/countries.js'

let worldMap = {};
(function(mod){
	/**
	* 初始化
	**/
	var chart01,chart02,chart04,chart05,chart03;

	var convertData = function (data) {
	    var res = [];
	    for (var i = 0; i < data.length; i++) {
	        var geoCoord = geoCoordMap[data[i].name];
	        if (geoCoord) {
	            res.push({
	            	name:data[i].name,
	            	value:geoCoord.concat(data[i].value)
	        	})
	        }
	    }
	    return res;
	};
	
	var geoCoordMap = countries;

	mod.init = function(){
		mod.initChart();
		window.onresize = function(){
			chart01.resize();
			chart02.resize();
			chart03.resize();
			chart04.resize();
			chart05.resize();
		};
	};

	mod.initChart = function(){
		mod.chart01();
		mod.chart02();
		mod.chart04();
		mod.chart05();
		mod.mapChart();
	};

	mod.chart01 = function(){
		var options = {
			xAxis: {
		        type: 'category',
		        boundaryGap: false,
		        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月','9月','10月','11月','12月'],
		        axisLabel:{
		        	color:'#fff'
		        }
		    },
		    grid: {
		        left: '8%',
		        right: '8%',
		        bottom: '15%',
		        top:'15%',
		        containLabel: true
		    },
		    yAxis: {
		        type: 'value',
		        axisLabel:{
		        	color:'#fff',
		        	formatter: '{value}',
		        	lineStyle:{
		        		color:'#fff'
		        	}
		        },
		        splitLine:{
		        	lineStyle:{
		        		color:'#fff'
		        	}
		        }
		    },
		    color:['#76c94b'],
		    series: [{
		        symbol:'circle',
		        symbolSize:10,
		        data: [12000,11000, 13000,12500, 14000,15500,16000, 18520,10000,20183],
		        label:{
		        	show:false,
		        	formatter: '{c}',
		        	color:'#fff'
		        },
		        type: 'line',
		        areaStyle: {
		        	color:'rgba(107,183,71,0.3)'
		        },
		        smooth: true
		    }]
		};
		chart01 = echarts.init(document.getElementById("chart01"));
		chart01.setOption(options);
	};

	mod.chart02 = function(){
		var options = {
			legend: {
		        orient: 'horizontal',
		        bottom:'50px',
		        data:['aaaaa','aaaaaa','aaaaaaa'],
		        formatter:function(name){
		        	return name;
		        },
		        textStyle:{
		        	color:'#546d97'
		        },
		        icon:'circle'
		    },
		    series: [
		     	{
		            type:'pie',
		            radius: [0, '40%'],
		            color:["transparent"],
		            center:['50%','45%'],
		            data:[
		                {
		                	value:270000,
		                	name:'总用户量',
		                	label:{
		                		color:"#333",
		                		position:"center",
		                		rich: {
		                			a: {
							            color: '#fff',
							            fontSize:24
							        },
							        b: {
							        	 color: '#546d97',
							             lineHeight:20,
							             fontSize:16
							        },
		                		},
		                		formatter:'{a|{c}} \n {b|{b}} '
		                	}
		            	},
		            ]
		        },
		        {
		            type:'pie',
		            radius: ['40%', '55%'],
		            center:['50%','45%'],
		            label:{
		            	show:true,
		            	color:'#546d97',
		            	formatter: '{b}\n {d}%  ',
		            },
		            labelLine:{
		            	lineStyle:{
		            		color:'#546d97'
		            	}
		            },
		            color:["#aa7efb","#f9c256","#2bb7ce"],
		            data:[
		                {value:91000, name:'aaaa'},
		                {value:4000, name:'ssssss'},
		                {value:175000, name:'aaaaaaa'}
		            ]
		        }
		    ]
		};

		chart02 = echarts.init(document.getElementById("chart02"));
		chart02.setOption(options);
	};

	mod.chart04 = function(){
		var options = {
		    title: {
		       show:false
		    },
		    tooltip: {
		        trigger: 'axis',
		        axisPointer: {
		            type: 'shadow'
		        }
		    },
		    grid: {
		        left: '7%',
		        right: '7%',
		        bottom: '10%',
		        top:'2%',
		        containLabel: true
		    },
		    xAxis: {
		        type: 'value',
		        boundaryGap: [0, 0.01],
		        axisLabel:{
		        	color:'#546d97'
		        },
		        splitLine:{
		        	lineStyle:{
		        		color:'#1b2f5e'
		        	}
		        }
		    },
		    yAxis: {
		        type: 'category',
		        axisLabel:{
		        	color:'#546d97'
		        },
		        data: ["马来西亚", "斯里兰卡", "印尼", "巴基斯坦", "特多"]
		    },
		    series: [
		        {
		            type: 'bar',
		            data:  [150, 200, 1705, 1547, 3050],
		            barMaxWidth:30,
		            itemStyle:{
		            	normal:{
		            		barBorderRadius:[0,5,5,0],
		            		color: function(params){
		            			// var colorList = ["#f51806", "#3393f2", "#f37734", "#87c900", "#f5ca00", "#48c1cb", "#aa7efb"];
		            			var colorList = ["#f37734", "#87c900", "#f5ca00", "#48c1cb", "#aa7efb"];
		            			return colorList[params.dataIndex];
		            		}
		            	}
		            }
		        }
		    ]
		};

		chart04 = echarts.init(document.getElementById("chart04"));
		chart04.setOption(options);
	};

	mod.chart05 = function(){
		var options = {
		    title : {
		       show:false
		    },
		    color:['#a166f6','#73c043','#563d9d','#f9c145','#27b6c8','#f51806','#bf5850'],
		    series : [
		        {
		            name:'',
		            type:'pie',
		            radius : [30, 110],
		            roseType : 'area',
		            data:[
		                {value:22355, name:'aaaaaa\n\n'},
		                {value:4344, name:'bbbbbbbb\n\n'},
		                {value:53891, name:'ccccccc\n\n'},
		                {value:23438, name:'ddddddd\n\n'},
		                {value:29751, name:'eeeeeee\n\n'},
		                {value:179, name:'ffffffff\n\n'},
		                {value:136042, name:'gggggggg\n\n'}
		            ],
		            label:{
		            	color:'#fff',
		            	formatter: '{b} {d}% '+'| {c}',
		            },
		            labelLine:{
		            	lineStyle:{
		            		color:'#546d97'
		            	}
		            }
		        }
		    ]
		};
		chart05 = echarts.init(document.getElementById('chart05'));
		chart05.setOption(options);
	};
	mod.mapChart = function(){
		var data = [
		    {name: '特多', value: 3050},
		    {name: '巴基斯坦', value: 1547},
		    {name: '斯里兰卡', value: 200},
		    {name: '马来西亚', value: 150},
		    {name: '德国', value: 2182},
		    {name: '罗马尼亚', value: 2016},
		    {name: '尼日利亚', value: 1800},
		    {name: '菲律宾', value: 1795},
		    {name: '俄罗斯联邦', value: 1485},
		    {name: '印度尼西亚', value: 1705},
		    {name: '阿拉伯联合酋长国', value: 333},
		    {name: '科特迪瓦', value: 418},
		    {name: '西班牙', value: 1300},
		    {name: '捷克共和国', value: 1179},
		    {name: '印度', value: 1134},
		    {name: '意大利', value: 1102},
		    {name: '土耳其', value: 1039},
		    {name: '南非', value: 918},
		    {name: '吉林',value: 88},
		    {name: '江苏',value: 1984},
		    {name: '辽宁',value: 371},
		    {name: '内蒙',value: 185},
		    {name: '陕西',value: 2951},
		    {name: '上海',value: 441},
		    {name: '重庆',value: 28498}
		];
		var option = {
		    backgroundColor: 'transparent',
		    title:{
		    	subtext:'用户量对应色值',
		    	subtextStyle:{
		    		color:'#213989',
		    		lineHeight:100,
		    		verticalAlign:'bottom'
		    	},
		    	bottom:20,
		    	left:210
		    },
		    visualMap: {
		    	type:'piecewise',
		        pieces:[
		        	{gt:30000},
		        	{gt:10000,lte:30000},
		        	{gt:1000,lte:10000},
		        	{lte:1000}
		        ],
		        bottom:50,
		        left:210,
		        textStyle: {
		            color: '#333'
		        },
		        inRange:{
		        	symbol:'circle',
		        	color:["#f01a22","#4dd9f1", "#b0f395", "#ffd480"]
		        },
		        formatter: function (value, value2) {
		        	if(value == "-Infinity"){
		        		return  value2 + '以下'; 
		        	}else if(value2 == "Infinity"){
						return  value + '以上'; 
		        	}else{
		        		var first = '',last = '';
			        	switch(value){
			        		case 10000:
			        			first = '1万';
			        			break;
			        		case 1000:
			        			first = '1千';
			        			break;
			        	}
			        	switch(value2){
			        		case 30000:
			        			last = '3万';
			        			break;
			        		case 10000:
			        			last = '1万';
			        			break;
			        	}
				  	  return  first + '至' + last; // 范围标签显示内容。
		        	}
				}
		    },
		    geo: {
		        map: 'world',
		        aspectScale: 0.75, 
				zoom:1.15,
		        // show: true,
		        label: {
		            emphasis: {
		                show: false
		            }
		        },
				top:50,
		        itemStyle: {
		            normal: {
		                areaColor: 'rgb(217, 223, 226)',
		                borderColor: '#104db0',
		                borderWidth:1,
		                shadowColor: 'rgba(16,77,176,.6)',
		                shadowBlur: 13,
		                shadowOffsetY:2,
		                shadowOffsetX:2,
		            },
		             emphasis: {
		                    areaColor: '#90bdd6'
		                }
		        },
		        regions:[{
		        	name:'China',
		        	selected:true,
		        	itemStyle: {
				        areaColor: 'red',
				        color: 'red'
				    }
		        }]
		    },
		    series: [
		        {
		            // type: 'effectScatter',
		            type: 'scatter',
		            coordinateSystem: 'geo',
		            symbolSize: function (val) {
		            	var size = val[2] / 1000;
		                return size < 1 ? 9 :( size > 12 ? 20 : 12);
		            },
		            showEffectOn: 'render',
		            rippleEffect: {
		                brushType: 'stroke',
		            	scale:5,
		            	period:12
		            },
		            data: convertData(data),
		            label: {
		                normal: {
		                    formatter: '{b}:{c}',
		                    formatter: function (params) {
					            return params.name + ' : ' + params.value[2];
					        },
		                    position: 'right',
		                    show: false
		                },
		                emphasis: {
		                    show: true
		                }
		            },
		            itemStyle: {
		                normal: {
		                	borderColor:'rgba(43,183,206,0.3)',
		                	borderWidth: 18,
		                    opacity:1,
		                    color: '#ddb926'
		                },
		                emphasis: {
		                    areaColor: '#3f5a69'
		                }
		            }
		        }
		    ]
		};
		chart03 = echarts.init(document.getElementById('chartMap'));
		chart03.setOption(option);
	};

	mod.removeMap = function(){
		chart01.dispose();
		chart02.dispose();
		chart03.dispose();
		chart04.dispose();
		chart05.dispose();
	}

})(worldMap); 

export default worldMap;