function double(num){
  return num * 2
}
function square(num){
  return num ** 2
}


function composeFn(...fns){
  return function(...args){
    return fns.reduce((p,c,i)=>{
      if(i===0) {
        const res =  c.apply(this,args)
        return res
      }
      return c(p)
    },{})  // 其实初始值是谁都无所谓，判断之后会跳过的
  }
}

var newFn = composeFn(double,square)

// console.log(newFn(10))

// 之后发现，其实初始值就是传给函数的参数
// 传给函数的参数就是给第一个函数使用的，之后的函数都是使用之前函数的结果
function composeFn2(...fns){
  return function(...args){
    return fns.reduce((p,c)=>{ 
      return Array.isArray(p) ? c(...p) : c(p)
    },args)
  }
}

function sum(n,m){
  return n + m 
}

var newFn2 = composeFn2(sum,double,square)

console.log(newFn2(5,5))

// 如果我的函数链中需要多个参数,就需要在解构了（composeFn2内部）
function getTwoNumber(){
  return [5,5]
}

var newFn3 = composeFn2(getTwoNumber,sum,double,square)

console.log( newFn3())