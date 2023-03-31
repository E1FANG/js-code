"use strict"

// 严格模式下，自执行函数指向undefined
function foo (){
  console.log(this)  // undefined
}

foo() //undefined

// setTimeout的this
setTimeout(function() {
  console.log(this) // window
}, 1000)

setTimeout(()=>{
  console.log(this) // window
}, 1000)