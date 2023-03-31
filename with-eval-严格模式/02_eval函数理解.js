// eval函数：将传入的字符串作为js代码执行。

var jsStr = 'var a = `hello world`; console.log(a)'

eval(jsStr)

// 不推荐使用eval
// 1. 可读性差
// 2. 不安全，容易被别人注入字符串执行
// 3. 不会被js引擎优化