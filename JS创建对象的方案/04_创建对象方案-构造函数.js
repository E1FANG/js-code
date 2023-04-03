// 规范：构造函数的首字母一般大写

function Person(name, age, height, address) {
  this.name = name
  this.age = age
  this.height = height
  this.address = address

  this.eat = function () {
    console.log('eating')
  }

  this.run = function () {
    console.log('running')
  }
}

const p1 = new Person('tom', 18, 190, '广州市')
const p2 = new Person('tomas', 23, 180, '上海市')

console.log(p1, p2)  // 带类型  Person

// 构造函数的缺点（瑕疵）：每个创建出来的对象的方法，都是独立的
console.log(p1.eat === p2.eat) //false
console.log(p1.run === p2.run) //false
// 如果大量创建，重复创建函数对象，就会比较占据内存。
// 这时候就需要原型了