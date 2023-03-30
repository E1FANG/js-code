// 柯里化：将一个接受多个参数的函数，变成一个函数
// 这个函数接受一个参数，并返回一个函数去接收剩余的参数

// 例子  把sum转换成sum1的过程叫做 柯里化
// 未被柯里化的函数
function sum(x,y,z){
  return x+y+z
}
console.log( sum(10,20,30) )

// 柯里化的函数
function sum1(x){
  return function(y){
    return function(z){
      return x+y+z
    }
  }
}
console.log( sum1(10)(20)(30) )

// 简化
var sum2 = x => y => z =>{
  return x+y+z
}

console.log( sum2(10)(20)(30) )


// 拆分成两个参数，也是柯里化，主要是过程
var sum3 = (x,y)=>z=> x+y+z
console.log( sum3(10,20)(30) )
