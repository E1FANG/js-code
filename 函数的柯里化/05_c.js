function currying(fn){
  return function curried(...args){
    if(args.length >= fn.length){
      return fn.apply(this,args)
    }else{
      return function(...args2){
        return curried.apply(this,[...args,...args2])
      }
    }
  }
}

function sum(x,y,z){
  return x+y+z
}
console.log( sum(10,20,30) )

var currySum = currying(sum)

console.log( currySum(10)(20)(30) )