// 一个数据需要通过多个函数调用计算出来的话，就可以使用组合函数

// 比如这个数据需要放大2倍再取平方

function double(num){
  return num * 2
}
function square(num){
  return num ** 2
}

var count = 10
var result = square(double(count))
console.log(result)

// 如果有多个这样的数据，一直调用就很冗余
var result1 = square(double(10))
var result2 = square(double(20))

// 可以写一个组合函数
// 接收这两个函数，返回一个新的组合函数
function composeFn(m, n) {
  return function (count){
    return n(m(count))
  }
}

var newFn = composeFn(double,square)
var result3 = newFn(10)
console.log(result3)