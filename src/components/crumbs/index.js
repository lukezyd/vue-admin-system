const crumbsMap = {
	'ztable':'表格',
	'primary':'初级表格',
	'second':'中级表格',
	'senior':'高级表格'
};

const changeCrumbs ={
	data(){
		return {
			_pathList:'',
			pathList:[]
		}
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
			console.log(this.pathList);
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