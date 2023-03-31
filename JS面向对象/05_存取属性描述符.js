// 存取属性描述符有以下四个特性：
// 用了属性描述符,那么会有默认的特性（特性的默认值）
const configurable = {
  mean: `表示属性是否可以通过使用delete删除属性,
        是否可以修改它的特性,
        或者是否可以将它修改为存储属性描述符`,
  notes: [
    '和数据描述符是一致的',
    '当我们直接在一个对象上定义某个属性时,这个属性的[[configurable]]为true',
    '当我们通过属性描述符定义一个属性时,这个属性的[[configurable]]为false' //默认值
  ]
}

const Enumerable = {
  mean: `表示属性是否可以通过for-in或者Object.keys()返回该属性,
         或者console.log()打印出该属性`,
  notes: [
    '和数据描述符是一致的',
    '当我们直接在一个对象上定义某个属性时,这个属性的[[configurable]]为true',
    '当我们通过属性描述符定义一个属性时,这个属性的[[configurable]]为false'//默认值
  ]
}

const get = {
  mean: `获取属性时会执行的函数`,
  notes: [
    '默认情况下,这个值是undefined',//默认值
  ]
}
const set = {
  mean: `设置属性时会执行的函数`,
  notes: [
    '默认情况下,这个值是undefined',//默认值
  ]
}

// 例子
const obj = {
  name: 'hasson',
  age: 18,
  _address: '广州市'
}

// 我们希望把这个下划线属性隐藏起来，只暴露address
// 1. 私有属性，不希望被外界使用和赋值
// 2. 截获某一个属性它访问和设置值的过程时，也会使用存储属性描述符 （响应式原理）
Object.defineProperty(obj, 'address', {
  configurable: true,
  enumerable: true,
  get() {
    console.log('截获 获取address的 过程')
    return this._address
  },
  set(value) {
    console.log('截获 设置address的 过程')
    this._address = value
  }
})
console.log(obj.address) // 广州市
obj.address = '上海市'
console.log(obj.address) // 上海市
