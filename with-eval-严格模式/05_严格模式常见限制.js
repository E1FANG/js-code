// 1. 禁止意外创建全局变量 
// 没有定义就赋值，message、age都会变成全局变量
message = 'hello'
console.log(message)

function foo(){
  age = 20
}
foo()
console.log(age)

// 2. 不允许函数拥有相同名称
function bar(x,y,x){
  console.log(x,y,x)
}
bar(10,20,30)

// 3. 静默错误
true.name = 'abc'
NaN = 123
var obj = {}
Object.defineProperty(obj,"name",{
  configurable:false,
  writable:false,
  value:'hasson'
})
obj.name = '123'
// delete obj.name configurable 不可编辑

// 4. 不允许使用8进制格式
var num = 0123 // 八进制
// es6 用0o就可以
var num2 = 0o123 // 八进制
var num3 = 0x123 // 十六进制
var num4 = 0b100 // 二进制
console.log(num,num2,num3,num4)

// 5. with 语句不允许使用
// 6. eval函数不会向上引用变量