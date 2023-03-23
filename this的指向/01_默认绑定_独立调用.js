// 01
function foo1(){
  console.log(this)
}
foo1() //window

// 02 
function foo1(){
  console.log(this)
}
function foo2(){
  foo1()
}
function foo3(){
  foo2()
}
foo3() // window

// 03
function foo (){
  console.log(this)
}
var obj = {
  name:'hasson',
  fn(){
    // 在这里是独立调用
    foo()
  }
}
obj.fn() // window

// 04
function foo(){
  return function bar(){
    console.log(this)
  }
}
const fn = foo()

const obj = {
  name:'hasson',
  eating:fn
}

obj.eating() //obj