// static 的属性 只有类能访问，实例不能访问

class Animal {
  static isDead = false
  die() {
    // this.isDead = true
    console.log('Animal execute die', this.constructor.isDead)
    return this.isDead
  }

}

class Dog extends Animal {
  // name = 'default dog'
  constructor(name) {
    super()
    console.log(this.isDead)
    this.name = name
  }
}

const wa = new Dog('wa')
wa.die()
console.log(wa.isDead)

