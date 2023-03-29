Function.prototype.myApply = function (thisArg,argArray){
  // 获取要调用的函数
  var fn = this

  // 非对象this指向window
  thisArg = (thisArg===null || thisArg === undefined) ? window : Object(thisArg)

  //  绑定this，执行
  thisArg.fn = fn
  var arg = argArray || []
  var result = thisArg.fn(...arg)
  delete thisArg.fn

  return result
}

function sum(num1,num2){
  return num1 + num2
}

// 系统调用
var res = sum.apply('abc',[1,2])
console.log('系统调用',res)

// myApply

var res2 = sum.myApply('abc',[3,4])
console.log('myApply',res2)