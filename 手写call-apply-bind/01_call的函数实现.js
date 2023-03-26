Function.prototype.myCall = function(thisArg,...args){
  // 1. 获取需要被执行的函数
  // 因为是FN.myCall()去调用的，this就是我们要执行的函数
  const fn = this

  // 2.对thisArg转换成对象类型（防止它传入的是非对象类型）
  thisArg = thisArg? Object(thisArg) : window

  // 3. 调用需要被执行的函数
  thisArg.fn = fn
  const result =  thisArg.fn(...args) //也是使用显式绑定给fn的this绑定到thisArg上
  delete thisArg

  // 4. 讲最终的结果返回出去
  return result
}


function foo(num1,num2,num3){
  console.log('foo',this)
  console.log(num1,num2)
  return num1 + num2
}
const res =  foo.myCall({},123,456,789)
console.log('res',res)