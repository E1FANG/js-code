// 通过对象去调用一个函数，js引擎会自动把函数的this绑定为该对象，即隐式绑定

const obj1 = {
  name:'obj1',
  fn(){
    console.log(this)
  }
}
 
const obj2 = {
  name:'obj2',
  fn:obj1.fn
}

obj2.fn()