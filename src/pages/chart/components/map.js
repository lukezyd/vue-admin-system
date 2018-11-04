// import echarts from 'echarts'
import 'echarts/map/js/world.js'
import countries from '@/utils/countries.js'

let worldMap = {};
(function(mod){
	/**
	* 初始化
	**/
	var chart03;

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
			chart03.resize();
		};
	};

	mod.initChart = function(){
		mod.mapChart();
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
		chart03.dispose();
	}

})(worldMap); 

export default worldMap;