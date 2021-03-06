const catData = [{
  id:1,
  name: '小咪1号',
  age: 2,
  sex: '女猫',
  type: '折耳猫',
  value: 1,
  mark: '这是一个备注',
  date: '2018-10-12',
}, {
  id:2,
  name: '小咪2号',
  age: 2,
  sex: '男猫',
  type: '英短猫',
  mark: '这是一个备注',
  value: 1,
  date: '2018-10-12',
}, {
  id:3,
  name: '小咪3号',
  age: 2,
  sex: '男猫',
  type: '折耳猫',
  mark: '这是一个备注',
  value: 2,
  date: '2018-10-12',
}, {
  id:4,
  name: '小咪4号',
  age: 2,
  mark: '这是一个备注',
  sex: '男猫',
  value: 3,
  type: '布偶猫',
  date: '2018-10-12',
}, {
  id:5,
  name: '小咪5号',
  age: 2,
  sex: '女猫',
  mark: '这是一个备注',
  value: 4,
  type: '缅因猫',
  date: '2018-10-12',
}, {
  id:6,
  name: '小咪6号',
  age: 2,
  sex: '男猫',
  mark: '这是一个备注',
  value: 5,
  type: '折耳猫',
  date: '2018-10-12',
}, {
  id:7,
  name: '小咪7号',
  age: 2,
  sex: '男猫',
  mark: '这是一个备注',
  value: 6,
  type: '埃及猫',
  date: '2018-10-05',
}, {
  id:8,
  name: '小咪8号',
  age: 2,
  sex: '女猫',
  mark: '这是一个备注',
  value: 7,
  type: '折耳猫',
  date: '2018-10-15',
}, {
  id:9,
  name: '小咪9号',
  age: 2,
  value: 8,
  mark: '这是一个备注',
  sex: '女猫',
  type: '折耳猫',
  date: '2018-10-18',
}, {
  id:10,
  name: '小咪10号',
  age: 2,
  sex: '女猫',
  mark: '这是一个备注',
  value: 9,
  type: '折耳猫',
  date: '2018-10-11',
}];

const _catType = [
  {text:"折耳猫",value:1},
  {text:"英短猫",value:2},
  {text:"波斯猫",value:3},
  {text:"布偶猫",value:4},
  {text:"短毛猫",value:5},
  {text:"蓝猫",value:6},
  {text:"挪威猫",value:7},
  {text:"缅因猫",value:8},
  {text:"埃及猫",value:9},
  {text:"美短猫",value:10},
  {text:"孟买猫",value:11},
  {text:"暹罗猫",value:12},
  {text:"伯曼猫",value:13},
  {text:"狸花猫",value:14},
  {text:"褴褛猫",value:15}];

  
export default {
  tableData: config => {
    return {
      catData,
      code:200
    }
  },
  tableDetails: config => {
     const catId = JSON.parse(config.body).catId;
     return catData[catId];
  },
  catType: config => {
    return {
      _catType,
      code:200
    }
  }
}