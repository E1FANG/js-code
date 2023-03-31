// 整个文件开启严格模式
"use strict"

// 函数内部开启严格模式
function foo(){
  "use strict"

  true.foo = "abc"
}

foo()


// 多个文件开启严格模式
// 打包工具默认帮我们完成。