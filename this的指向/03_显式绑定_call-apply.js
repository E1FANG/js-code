// 隐式绑定是需要在对象内部保存对函数的引用才可以
// 如果我们不希望这样做，可以使用call和apply去显式地绑定this给到对象

function fn(){
  console.log(this)
}

const obj = {
  name:'hasson'
}
fn.call(obj)


function sum(num1,num2){
  console.log(num1+num2,this)
}

sum.call('call',10,20)
sum.apply('apply',[10,20])
