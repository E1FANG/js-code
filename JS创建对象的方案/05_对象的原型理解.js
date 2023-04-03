// 每个函数都有一个隐式原型 [[prototype]]
// 虽然我们叫[[prototype]],其实每个浏览器的实现都不一样，一般是__proto__
// 这个[[prototype]]本来是不让访问的，所以他是隐形的，但是浏览器给了这个__proto__属性让你可以访问
// 但他们是一个东西,就是原型

const obj = {
}

console.log(obj.name) // undefined

obj.__proto__.name = 'tom'

console.log(obj.name) // tom

// 访问一个对象的属性，如果该对象上没有这个属性，就会沿着它的原型链去找