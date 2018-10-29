const catData = [{
  name: '小咪1号',
  age: 2,
  sex: '女猫',
  type: '折耳猫',
  value: 1,
  mark: '这是一个备注',
  date: '2018-10-12',
}, {
  name: '小咪2号',
  age: 2,
  sex: '男猫',
  type: '英短猫',
  mark: '这是一个备注',
  value: 1,
  date: '2018-10-12',
}, {
  name: '小咪3号',
  age: 2,
  sex: '男猫',
  type: '折耳猫',
  mark: '这是一个备注',
  value: 2,
  date: '2018-10-12',
}, {
  name: '小咪4号',
  age: 2,
  mark: '这是一个备注',
  sex: '男猫',
  value: 3,
  type: '布偶猫',
  date: '2018-10-12',
}, {
  name: '小咪5号',
  age: 2,
  sex: '女猫',
  mark: '这是一个备注',
  value: 4,
  type: '缅因猫',
  date: '2018-10-12',
}, {
  name: '小咪6号',
  age: 2,
  sex: '男猫',
  mark: '这是一个备注',
  value: 5,
  type: '折耳猫',
  date: '2018-10-12',
}, {
  name: '小咪7号',
  age: 2,
  sex: '男猫',
  mark: '这是一个备注',
  value: 6,
  type: '埃及猫',
  date: '2018-10-05',
}, {
  name: '小咪8号',
  age: 2,
  sex: '女猫',
  mark: '这是一个备注',
  value: 7,
  type: '折耳猫',
  date: '2018-10-15',
}, {
  name: '小咪9号',
  age: 2,
  value: 8,
  mark: '这是一个备注',
  sex: '女猫',
  type: '折耳猫',
  date: '2018-10-18',
}, {
  name: '小咪10号',
  age: 2,
  sex: '女猫',
  mark: '这是一个备注',
  value: 9,
  type: '折耳猫',
  date: '2018-10-11',
}];

export default {
  tableData: config => {
    return {
      catData,
      code:200
    }
  }
}