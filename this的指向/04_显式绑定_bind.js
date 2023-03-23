// 与call和apply不同的是
// call和apply是直接执行函数
// bind是返回一个新的函数，且这个函数已经被显式地绑定了this

function foo (){
  console.log(this)
}

const newFoo=foo.bind('bind')

newFoo() // 'bind'

// 虽然这里是默认绑定的独立调用函数，但是显示绑定的优先级是比默认绑定的优先级高的
// 所以this指向的是'bind'这个字符串