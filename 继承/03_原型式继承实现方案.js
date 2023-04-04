// 需要被继承的原型对象
const obj = {
  name: 18,
  run: function () {
    console.log('running')
  }
}

// 解决借用构造函数方案的弊端：给原型实例添加了一些不必要的值为undefined的属性
function createObj(o) {
  const newObj = {}
  Object.setPrototypeOf(newObj, o)

  return newObj
}

// const info = createObj(obj)
// console.log(info)
// console.log(info.__proto__)
// info.run()

// 以上的方法是得益于es之后新增的方法setPrototypeOf 实现的
// 但是这个方案最开始是道格拉斯制定的，他那时候还没有这个方法，是通过函数的显式原型实现的

function createObj2(o) {
  function fn() { }
  fn.prototype = o
  return new fn()
}
const info = createObj2(obj)
console.log(info)
console.log(info.__proto__)
info.run()

// 第三个方法，就是es5新增了一个方法 Object.create() 将原型式继承规范化了
// 该方法接收两个参数，新对象的原型对象，需要给新对象的属性（属性描述符的方式）

const info2 = Object.create(obj, {
  number: {
    value: '130xxxxxxxx',
    writable: true,
    configurable: true,
    enumerable: true,
  }
})

console.log(info2)
console.log(info2.__proto__)
info2.run()