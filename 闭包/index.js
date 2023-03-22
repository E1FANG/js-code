function foo(){
  const course = 'course'

  function bar() {
    console.log(course)
  }

  return bar
}

const fn = foo()
fn()

// 函数以及它所能访问的外部作用域的自由变量的组合
// 当捕捉闭包的时候，它的自由变量就会被确定，这样即使在脱离了捕捉时的上下文的环境下，也能正常运行。

// 闭包解决了什么问题
// 1，创建函数内部的私有变量
// 2，保持对外部作用域的引用 

// 创建函数内部的私有变量是怎么做的，有什么用呢
// 比如有一个生命系统，我们不希望别人随便修改(私有变量)，只能通过我们提供的方法去修改

function hpSys(){
  let hp = 100 
  function getHurt(){
    hp--
    console.log('现在的HP值是',hp)
  }
  function getTreatment(){
    hp =  hp===100? 100 : hp+1
    console.log('现在的HP值是',hp)
  }
  function dead(){
    hp=0
    console.log('现在的HP值是',hp)
  }
  function checkHp(){
    console.log('现在的HP值是',hp)
  }
  return {
    getHurt,
    getTreatment,
    dead,
    checkHp
  }
}

const hpOperate = hpSys()
hpOperate.getHurt() //hp=99

hp // error 外部不可访问hp，只能通过hpOperate去操作·
