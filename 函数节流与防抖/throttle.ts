const flash = (distance:number)=>{
  console.log('闪现');
  console.log(distance);
}

const throttle = (fn:Function,time:number)=>{
  let timer = null
  let flag = false
  return (...args:any[])=>{
    if(flag) return 
    fn.call(undefined,...args)
    flag = true
    timer = setTimeout(()=>{
      flag = false
    },time)
  }
}

const useFlash = throttle(flash,2000)

useFlash()