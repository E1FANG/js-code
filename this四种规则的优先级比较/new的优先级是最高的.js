// new 与隐式绑定

const obj = {
  name:'obj',
  fn:function(){
    console.log(this)
  }
}

const foo = new obj.fn() // this指向new临时创建的空对象


// new 与 显式绑定
const fn = function(){
  console.log(this)
}
const newFn = fn.bind('aaa')

const obj1 = new newFn() //  this指向new临时创建的空对象

