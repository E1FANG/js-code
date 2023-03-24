// 01 call
const obj = {
  name:'obj',
  fn:function(){
    console.log(this)
  }
}

obj.fn.call('aaa') // aaa

// 02 bind
const fn2 = function(){
  console.log(this)
}
const obj2 = {
  name:'obj2',
  fn:fn2.bind('aaa')
}

obj2.fn() // 'aaa'
