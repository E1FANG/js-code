//  通过call，借用（窃取）父类的构造函数，实现继承
// 主要是解决第三个弊端，但是其实解决了第三个弊端，其实所有弊端都解决了

function Person(name, age, friends) {
  this.name = name
  this.age = age
  this.friends = friends
}

Person.prototype.eat = function () {
  console.log(this.name + ' eating')
}

function Student(name, age, friends, number) {
  Person.call(this, name, age, friends)
  this.number = number
}


Student.prototype = new Person

Student.prototype.study = function () {
  console.log(this.name + ' studying')
}

const stu1 = new Student('curry', 18, ['kobe'], 213)
const stu2 = new Student('james', 28, ['why'], 123)

console.log(stu1)
console.log(stu2)

stu1.eat()
stu1.study()

stu1.friends.push(1)
console.log(stu2.friends)  // ['why'] 

stu1.name = 'kobe'
console.log(stu2.name) // james

// 弊端
// 1. Person函数至少被调用两次
// 2. 原型对象Person多出来一些属性，这些属性是没有存在的必要的。
//    因为new 调用构造函数的时候，没有传参数，所以它里面的this都是undefined