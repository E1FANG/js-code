// 1. 构造函数
const obj = new Object()
obj.name = 'hasson'
obj.age = 18
obj.height = 180

// 赋值属性比较麻烦

// 2. 字面量 (简洁内聚)
const obj2 = {
  name:'hasson',
  age:19,
  height:180
}

console.log(obj.name)
obj.age = 40
delete obj2.age


// 遍历一个对象的属性，但是某个属性不让他遍历到，怎么操作？
// 属性描述符
// 使用Object.defineProperty方法修改