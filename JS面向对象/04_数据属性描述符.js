// 数据描述符有以下四个特性：
// 用了属性描述符，那么会有默认的特性（特性的默认值）
const configurable = {
  mean: `表示属性是否可以通过使用delete删除属性,
        是否可以修改它的特性,
        或者是否可以将它修改为存储属性描述符`,
  notes: [
    '当我们直接在一个对象上定义某个属性时,这个属性的[[configurable]]为true',
    '当我们通过属性描述符定义一个属性时,这个属性的[[configurable]]为false' //默认值
  ]
}

const Enumerable = {
  mean: `表示属性是否可以通过for-in或者Object.keys()返回该属性,
         或者console.log()打印出该属性`,
  notes: [
    '当我们直接在一个对象上定义某个属性时,这个属性的[[configurable]]为true',
    '当我们通过属性描述符定义一个属性时,这个属性的[[configurable]]为false'//默认值
  ]
}

const Writable = {
  mean: `表示是否可以修改属性的值`,
  notes: [
    '当我们直接在一个对象上定义某个属性时,这个属性的[[configurable]]为true',
    '当我们通过属性描述符定义一个属性时,这个属性的[[configurable]]为false'//默认值
  ]
}

const Value = {
  mean: `属性的value值,读取属性时会返回该值,修改属性时,会对其进行修改`,
  notes: [
    '默认情况下，这个值是undefined',//默认值
  ]
}