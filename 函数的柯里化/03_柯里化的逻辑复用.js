// 逻辑复用_闭包

// 打印日志功能
function log(time,type,message){
  time = `${time.getFullYear()}-${time.getMonth()}-${time.getDay()}`
  console.log(`[${time}][${type}][${message}]`)
}

log(new Date(),'DEBUG','修复了一些错误')
log(new Date(),'DEBUG','修复了其他的错误')
log(new Date(),'CHORE','提交了一些杂项')
log(new Date(),'FEAT','增加了一些功能')
// 这样每次调用的时候传多次重复的参数很麻烦,而且还要在函数内部处理一遍参数

// 柯里化
function curryLog(time){
  time = `${time.getFullYear()}-${time.getMonth()}-${time.getDay()}`
  return type => {
    return message => {
      console.log(`[${time}][${type}][${message}]`)
    }
  }
}

// 这时候就可以定制一些自己的log，复用上层函数的逻辑
var nowLog = curryLog(new Date())
nowLog('DEBUG')('修复了一些错误')
nowLog('DEBUG')('修复了其他的错误')

var featureNowLog = nowLog('FEAT')
featureNowLog('增加详情组件')
featureNowLog('增加详情流程')