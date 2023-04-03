function Student() {
  this.name = 'curry'
}

function Person() {
  this.age = 18
  this.friends = []
}

Person.prototype.eat = function () {
  console.log(this.name + ' eating')
}

Student.prototype = new Person

Student.prototype.study = function () {
  console.log(this.name + ' studying')
}

const stu1 = new Student()
const stu2 = new Student()

stu1.eat()
stu1.study()

// 弊端
// 1. 打印s1的时候，继承的属性是看不到的（原型上的属性是枚举不到的）
// 2. stu1和stu2的friends是一样的，应该互相隔离
stu1.friends.push(1)
console.log(stu2.friends)  // [1] 

stu1.name = 'kobe'
console.log(stu2.name) // curry
// 只有修改引用的时候，才会互相影响

stu1.friends = 123 // 这样只是直接在stu1这个对象上面，创建一个属性，上面的是先查找friends，再操作。
console.log(stu1.friends)  // [1] 

// 3. 不好传参
// 上面的实现都没有给构造函数传参，因为真的不好处理。