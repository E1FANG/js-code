// 对象的原型是隐式的__proto__，函数的原型是显式的 prototype

function foo() {

}

const p1 = new foo
const p2 = new foo
// 显式的 就是可以直接访问的
console.log(p1.__proto__ === foo.prototype) // true
console.log(p2.__proto__ === foo.prototype) // true


// 结合new操作符的第二步
// 会将临时创建的对象的[[prototype]] 赋值给 构造函数的显示原型prototype
// 所以在04里面面临的问题，就可以通过函数的显式原型去解决了
// 只需要将重复创建的函数，放到函数的显式原型里面就可以了

// 构造函数的最佳实践
function Person(name, age) {
  this.name = name
  this.age = age

  Person.prototype.eat = function () {
    console.log(this.name, 'eating')
  }

  Person.prototype.run = function () {
    console.log(this.name, 'running')
  }
}

const person1 = new Person('curry', 29)
const person2 = new Person('james', 30)

console.log(person1.eat === person2.eat) //true  这时他们就是相等的了