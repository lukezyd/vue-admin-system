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
			pathList:[{
					text:'首页',
					basePath:'/'
				}]
		}
	},
	methods:{
		getPath: function(to) {
			if(to === "/"){
				this.pathList.push({
					text:'首页',
					basePath:'/'
				});
			}else{
				this._pathList = to.split('/');
				for(var i=0;i < this._pathList.length;i++){
					var val = this._pathList[i];
					this.pathList.push({
						text:crumbsMap[val]
					});
				}
				this.pathList[this._pathList.length - 1].basePath = to;

				console.log(this.pathList)
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