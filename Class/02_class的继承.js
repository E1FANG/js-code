// 在constructor里面调用super来实现继承
// super([args])调用父类constructor
// super.personMethod 调用父类方法（静态方法同样适用）

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  personMethods() {
    console.log('person methods')
  }

  static personStaticMethods() {
    console.log('person static methods')
  }
}

class Student extends Person {
  constructor(name, age, number) {
    super(name, age)
    this.number = number
  }

  StudentMethods() {
    super.personMethods()

    console.log('student methods')

    // 只能在静态方法里面调用父类的静态方法，否则undefined
    // super.personStaticMethods() 
  }

  static studentStaticMethods() {
    super.personStaticMethods()
    console.log('student static methods')
  }
}

const s1 = new Student('xxx', 18, 44012312)

console.log(s1)

s1.StudentMethods()
// Student.studentStaticMethods()