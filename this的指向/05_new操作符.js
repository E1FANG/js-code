// new操作符
// new会创建一个临时对象，把函数的this指向这个临时对象并执行函数，最后返回这个对象

function Person(name,age){
  this.name = name
  this.age = age
}

const p1 = new Person('fpp',10)
const p2 = new Person('cc',20)

console.log('p1',p1)
console.log('p2',p2)