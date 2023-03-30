// 柯里化把一个函数拆分成了多个函数调用
// 那么每个函数就只负责一件事情，这就是单一职责

function flow (stage1){
  // 做单一的复杂处理
  // ...

  return function (stage2){
    // 做单一的复杂处理
    // ...
    
    return function (stage3){
      // 做单一的复杂处理
      // ...
      return stage1 + stage2 + stage3
    }
  }
}