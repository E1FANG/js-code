class Person {
    sayHi(): void { }
    constructor(public name: string, public age: number) { }
}
// public ：这个对象有一个公开的属性 name，类型是string

let person1 = new Person('frank', 18)
let person2 = new Person('jack', 23)

console.log(person1);
console.log(person2);

