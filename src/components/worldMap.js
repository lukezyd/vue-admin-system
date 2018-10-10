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
			chart05.resize();
		};
	};

	mod.initChart = function(){
		mod.chart01();
		mod.chart02();
		mod.mapChart();
		mod.chart05();
	};

	mod.chart01 = function(){
		var options = {
			xAxis: {
		        type: 'category',
		        boundaryGap: false,
		        data: [],
		        axisLabel:{
		        	color:'#546d97'
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
		        	color:'#546d97',
		        	formatter: '{value}',
		        	lineStyle:{
		        		color:'red'
		        	}
		        },
		        splitLine:{
		        	lineStyle:{
		        		color:'#1b2f5e'
		        	}
		        }
		    },
		    color:['#76c94b'],
		    series: [{
		        symbol:'circle',
		        symbolSize:10,
		        data: [12000,11000, 12500, 14000,15500,16000, 18520, {
		        	value:20183,
		        	label:{
			        	show:true,
			        	formatter: '{c}',
			        	color:'#76c94b'
			        }
		        }],
		        label:{
		        	show:false,
		        	formatter: '{c}',
		        	color:'#76c94b'
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
		        data:[],
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
		        data: []
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
		               
		            ],
		            label:{
		            	color:'#546d97',
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
		    // {name: '印尼', value: 1705},
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
		    {name: '泰国', value: 891},
		    {name: '缅甸', value: 823},
		    {name: '巴基斯坦', value: 751},
		    {name: '埃及', value: 679},
		    {name: '荷兰', value: 612},
		    {name: '哥伦比亚', value: 517},
		    {name: '马来西亚', value: 517},
		    {name: '阿尔及利亚', value: 504},
		    {name: '沙特阿拉伯', value: 499},
		    {name: '摩洛哥', value: 391},
		    {name: '喀麦隆', value: 369},
		    {name: '哥斯达黎加', value: 369},
		    {name: '赞比亚', value: 360},
		    {name: '加纳', value: 337},
		    {name: '肯尼亚', value: 319},
		    {name: '比利时', value: 301},
		    {name: '洪都拉斯', value: 288},
		    {name: '澳大利亚', value: 243},
		    {name: '萨尔瓦多', value: 193},
		    {name: '丹麦', value: 180},
		    {name: '巴西', value: 112},
		    {name: '智利', value: 67},
		    {name: '墨西哥', value: 63},
		    ////////////////
		    {name: '安徽',value: 112},
		    {name: '北京',value: 16750},
		    {name: '大连',value: 14},
		    {name: '福建',value: 101},
		    {name: '甘肃',value: 97},
		    {name: '广东',value: 74354},
		    {name: '广西',value: 369},
		    {name: '贵州',value: 192},
		    {name: '海南',value: 30},
		    {name: '河北',value: 114},
		    {name: '河南',value: 111},
		    {name: '黑龙江',value: 173},
		    {name: '湖北',value: 7375},
		    {name: '湖南',value: 102},
		    {name: '吉林',value: 88},
		    {name: '江苏',value: 1984},
		    {name: '江西',value: 120},
		    {name: '辽宁',value: 371},
		    {name: '内蒙',value: 185},
		    {name: '宁夏',value: 39},
		    {name: '青海',value: 26},
		    {name: '山东',value: 383},
		    {name: '山西',value: 97},
		    {name: '陕西',value: 2951},
		    {name: '上海',value: 441},
		    {name: '四川',value: 1172},
		    {name: '新疆',value: 22},
		    {name: '云南',value: 174},
		    {name: '浙江',value: 2059},
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
		    	bottom:120,
		    	left:20
		    },
		    visualMap: {
		    	type:'piecewise',
		        pieces:[
		        	{gt:30000},
		        	{gt:10000,lte:30000},
		        	{gt:1000,lte:10000},
		        	{lte:1000}
		        ],
		        bottom:150,
		        left:20,
		        textStyle: {
		            color: '#fff'
		        },
		        inRange:{
		        	symbol:'circle',
		        	color:["#2bb7ce", "#73bf54", "#f9c256", "#f01a22"]
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
		        show: true,
		        label: {
		            emphasis: {
		                show: false
		            }
		        },
				top:120,
		        itemStyle: {
		            normal: {
		                areaColor: '#091632',
		                borderColor: '#104db0',
		                borderWidth:3,
		                shadowColor: 'rgba(16,77,176,.6)',
		                shadowBlur: 13,
		                shadowOffsetY:2,
		                shadowOffsetX:2,
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
		        {  // 重复画一次地图，显示发光边缘的效果
		            type: 'map',
		            map: 'world',
					zoom:1.15,
					top:120,
		            aspectScale: 0.75, 
		            showLegendSymbol: true, 
		            label: {
		                normal: {
		                    show: false,
		                },
		                emphasis: {
		                    show: false,
		                    textStyle: {
		                        color: '#fff'
		                    }
		                }
		            },
		            itemStyle: {
		                normal: {
		                    areaColor: '#0b195d',
			                borderColor: '#0f217c',
		                    borderWidth: 1
		                },
		                emphasis: {
		                    areaColor: '#0f2c70'
		                }
		            }
		        },
		        {
		            type: 'effectScatter',
		            // type: 'scatter',
		            coordinateSystem: 'geo',
		            symbolSize: function (val) {
		            	var size = val[2] / 1000;
		            	console.log(size)
		                return size < 1 ? 7 :( size > 12 ? 18 : 9);
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
		                    // borderWidth: 18,
		                    // opacity:1,
		                    // color: '#ddb926'
		                }
		            }
		        }
		    ]
		};
		chart03 = echarts.init(document.getElementById('chart03'));
		chart03.setOption(option);

		// mod.renderTable(data);
	};

	mod.updateChart = function(){
		chart01.setOption({
			series:[{
				data: [0, 0, 0, 6, 0, 2, 0, {
		        	value:8,
		        	symbol:'circle',
		        	symbolSize:12,
		        }],
			}]
		});

		chart02.setOption({
			legend:{
				data:[],
			},
			series:[
				{
					data:[{
	                	value:290000,
	                	name:'总用户量',
	                }]
				},
				{
					data:[
		               
		            ]
				}
			]
		});

		chart04.setOption({
			yAxis: {
		        data: []
		    },
		    series: [
		        {
		            data:  [1500, 200, 1705, 1547, 3050],
		        }
		    ]
		});

		chart05.setOption({
			series : [
		        {
		            data:[
		            ],
		        }
		    ]
		});

		chart03.setOption({
			 series: [
		        {
		            data: convertData([
		                {name: "海门", value: 200},
		                {name: "鄂尔多斯", value: 12},
		                {name: "招远", value: 11112},
		                {name: "厦门", value: 26},
		                {name: "汕尾", value: 26000},
		                {name: "潮州", value: 26000},
		                {name: "丹东", value: 2447},
		                {name: "太仓", value: 27},
		                {name: "曲靖", value: 7727},
		                {name: "烟台", value: 2008},
		                {name: "福州", value: 23269},
		                {name: "瓦房店", value: 30},
		                {name: "即墨", value: 30},
		                {name: "抚顺", value: 31},
		                {name: "西安", value: 601},
		                {name: "北京", value: 31079},
		                {name: "大庆", value: 20079}
		            ]),
		        }
		    ]
		});
	};

	mod.renderTable = function(data){
		var _html = '';
		var dataList = [3467,754,243,214,136];
		if(data && data.length){
			data.length > 6 ? data.length = 6 : data.length;
			for(var i=0;i<data.length;i++){
				_html += '<tr>\
							<td>'+ (String(i).length < 2 ? "0"+(i+1) : (i+1)) +'</td>\
							<td>'+ data[i].name +'</td>\
							<td class="num-color">'+ dataList[i] +'</td>\
							<td class="num-color">'+ data[i].value +'</td>\
						</tr>';
			}
		}
		document.querySelector('.center-footer .table tbody').innerHTML =  _html;
	};

	mod.init();

})({}); 