import vis from 'vis'

var zvis = {};

(fuction(){
	visSet:function(itemList){
		 var self = this;
		 var items = new vis.DataSet(itemList.tripList);
		 var options = {
		    start: '2018-06-10',
		    end: new Date(),
		    editable: false,
		    height: '180px',
		    locale: moment.locale('zh-cn')
		 };
		 var container = document.getElementById('visualization');
		 var timeline = new vis.Timeline(container, items, options);

		 // self.rStrokeDetails(0,itemList);

		 // 点击事件
	    $("#visualization").on("click",".vis-item-overflow",function(){
		  	var _index = Number($(this).find(".vis-item-content").text().replace("行程",""));
		  	$(".vis-item.vis-background").css("background","rgba(82, 181, 97,.2)");
		  	$(".vis-item.vis-background").find(".vis-item-overflow").css("background","rgba(82, 181, 97,.2)");
		  	$(this).css("background","rgba(82, 181, 97,.6)");

		  	drawLineSymbol = false;
		  	// self.rStrokeDetails(_index - 1,itemList);
		  	return;
		});
	}
})(zvis);

export default zvis;


