Function.prototype.myBind = function(thisArg,...argArray){

  var fn  = this
  // 闭包捕获thisArg 
  thisArg = thisArg ? Object(thisArg) : window

  return function(...args){
    thisArg.fn = fn 
    var realArgs  =  [...argArray,...args]
    var result =  thisArg.fn(...realArgs)
    delete thisArg.fn
    return result
  }
}

function sum(num1,num2) {
  console.log(this)
  return num1 + num2
}

// sum.bind('abc',1)(2)
var res = sum.myBind('abc',1)(2)
console.log(1111,res)
