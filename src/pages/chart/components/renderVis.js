import vis from 'vis';
import 'vis/dist/vis.min.css'

const renderVis = {
	visSet:function(itemList){
		var list = [
		    {id: 1, content: 'item 1', start: '2018-10-20',end: '2018-10-21', type: 'background'},
		    {id: 2, content: 'item 2', start: '2018-10-14',end: '2018-10-15', type: 'background'},
		    {id: 3, content: 'item 3', start: '2018-09-18',end: '2018-09-19', type: 'background'},
		    {id: 4, content: 'item 4', start: '2018-11-01',end: '2018-11-02',type: 'background'},
		    {id: 5, content: 'item 5', start: '2018-11-02',end: '2018-11-03', type: 'background'},
		    {id: 6, content: 'item 6', start: '2018-11-03',end: '2018-11-04', type: 'background'}
		  ];

		 // var self = this;
		 var items = new vis.DataSet(list);
		 var options = {
		    start: '2018-06-10',
		    end: new Date(),
		    editable: false,
		    height: '180px',
		    // locale: moment.locale('zh-cn')
		 };
		 var container = document.getElementById('visualization');
		 var timeline = new vis.Timeline(container, items, options);

		 // self.visDetails(0,itemList);

	  //   $("#visualization").on("click",".vis-item-overflow",function(){
		 //  	var _index = Number($(this).find(".vis-item-content").text().replace("行程",""));
		 //  	$(".vis-item.vis-background").css("background","rgba(82, 181, 97,.2)");
		 //  	$(".vis-item.vis-background").find(".vis-item-overflow").css("background","rgba(82, 181, 97,.2)");
		 //  	$(this).css("background","rgba(82, 181, 97,.6)");

		 //  	drawLineSymbol = false;

		 //  	self.visDetails(_index - 1,itemList);
		 //  	return;
		 // });
	},
	visDetails:function(index,itemList){

	}
};

export default renderVis