// 严格模式一种具有限制性的js模式，使代码隐式地脱离了松散模式
// 在支持严格模式的浏览器在检测到代码有严格模式时，会以更加严格的方式对代码进行检测和执行：

// 严格模式对js的限制

// 1. 抛出错误来消除一些原有的隐式错误
 message = 'hello world'
 true.names = 123 // error 
 var obj = {}
 Object.defineProperty(obj,'name',{writable:false})
 obj.name = 123 // error obj.name已经是不可写的了
//  但是上面的错误在松散模式下，是隐式错误，不抛出的，在严格模式下就会错误。

// 2. 让js引擎在执行代码时进行更多的优化（不需要对一些特殊的语法进行处理）
// 就像上面这些隐式错误的代码


// 3. 禁用了在ECMAScript未来版本中可能会定义的一些语法
// 比如const，let，class，在ES6之前都是保留字
// 保留字在严格模式下是当作关键字处理的，用保留字声明变量会报错
// 避免以后在ECMAScript版本升级的时候产生错误