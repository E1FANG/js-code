// 1. with语句 可以形成自己的作用域
// 2. with语句主要是将一个对象插入到函数的作用域链上(with自己的作用域)
// 3. 不推荐使用with，并且在严格模式下会报错

var message = 'window mes'

function clg(){
  console.log(message)
}

clg() // window mes

var obj = {message: 'obj mes'}

with(obj){
  function clg1(){
    console.log(message)
  }
  clg1() // obj mes
}