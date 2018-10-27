const crumbsMap = {
	'home':'首页',
	'ztable':'表格',
	'primary':'初级',
	'second':'中级',
	'senior':'高级'
};
console.log(crumbsMap)
const changeCrumbs ={
	data(){
		return {
			_pathList:'',
			pathList:[]
		}
	},
	created(){
		var currentPath = this.$route.fullPath;
		console.log("is: "+currentPath);
		this.getPath(currentPath);
	},
	methods:{
		getPath: function(to) {
			this._pathList = to.split('/');
			for(var i=0;i < this._pathList.length;i++){
				var val = this._pathList[i];
				this.pathList.push({
					text:crumbsMap[val]
				});
			}
		}
	},
	watch:{
		$route: function(to){
			this.pathList = [];
			this._pathList = '';
			this.getPath(to.fullPath);
		}
	}
}

export default changeCrumbs