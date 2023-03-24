// 1, settimeout
setTimeout(()=>{
  console.log(this) // window
},0)

function fn(){
  console.log(this)
}
setTimeout(fn,0) //window

// 传入内部的函数this的指向是取决于setTimeout是怎么调用的，是通用于我们之前总结的

setTimeout(fn.bind('bind'),0)  // 也可以这样去改变他

// 2, 元素点击事件，事件委托
const body = document.querySelector('body') 
body.onclick = function(){
  console.log(this)  // body<el>
}

body.addEventListener('click',function (){
  console.log(this)  // body<el>
})


// 3, 数组的forEach、map、filter等
const  arr = [1,2,3]

arr.forEach(()=>{
  console.log(this) // window
})

arr.forEach(()=>{
  console.log(this) // 'window'  箭头函数的this在声明的时候就决定了,用call,apply,bind都是改不了的
},'arr')

arr.forEach(function(){
  console.log(this) // 'arr'
},'arr')

// 箭头函数的this在声明的时候就决定了,用call,apply,bind都是改不了的
const fc = ()=>{
  console.log(this)
}
fc.call('123') // window