const names = ['james','kobe','yao']
class Person {
  _hobby = ''
  constructor(name,age){
    this.name = name
    this.age = age
  }
  
  // 普通实例的方法
  eating(){
    console.log(this.name + 'eating')
  }

  // 类的访问器方法
  get hobby(){
    return this._hobby
  }
  set hobby (val){
    this._hobby = val + 'set'
    return this._hobby
  }

  // 类的静态方法
  // static声明的东西只能通过类去访问，封装一个只属于这个类的方法
  static randomPerson(){
    const nameIndex = Math.floor(Math.random() * names.length)
    const name = names[nameIndex]
    const age = Math.floor(Math.random() * 100)

    return new Person(name,age)
  }
}
for(let i=0; i<=10;i++){
  console.log(Person.randomPerson())
}