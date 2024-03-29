// 1. 构造函数也是一个普通函数，从表现形式来说，和千千万万个普通的函数没有任何区别
//    但是如果用new 来调用的话，这个普通函数，就是构造函数了

function foo() {
  console.log('foo~')
}

// 直接去调用， foo就是一个普通函数
foo() // foo~

// 换一种方式，用new关键字去调用一个函数，那么这个函数就是一个构造函数了 
new foo // foo~ 
// 不加()也是可以执行的，不过一般都会加上，因为我们一般用new创建一个对象的时候，都是需要传参数的。
new foo('name', 'age')

// 构造函数的执行跟普通函数的区别
// 1. 生成一个临时对象
// 2. 临时对象的原型__proto__指向构造函数的原型prototype
// 3. 执行构造函数体 (this指向临时对象)
// 4. 执行构造函数内部的代码（例如给新对象添加属性）
// 5. 如果构造函数返回非空对象，则返回该对象，否则返回刚创建的新对象。