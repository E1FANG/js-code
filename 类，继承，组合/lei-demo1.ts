class Persons {
    sayHi(): void { }
    constructor(public name: string, public age: number) { }
}
// public ：这个对象有一个公开的属性 name，类型是string

let person1 = new Persons('frank', 18)
let person2 = new Persons('jack', 23)

console.log(person1);
console.log(person2);

