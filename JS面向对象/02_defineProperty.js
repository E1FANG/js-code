var obj = {
  name:'hasson',
  age:19,
  height:180
}

Object.defineProperty(obj,'name',{
  writable:false,
  value:'abc'
})

Object.defineProperty(obj,'test',{
  writable:false,
  value:'abc'
})

console.log(obj) // test属性打印的时候是看不到的