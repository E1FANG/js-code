// 属性描述符分两种：
// 数据属性 描述符
// 存取属性 描述符

const 数据描述符 = {
  configurable: true,
  enumerable: true,
  value: true,
  writable: true,
  get: false,
  set: false
}

const 存取描述符 = {
  configurable: true,
  enumerable: true,
  value: false,
  writable: false,
  get: true,
  set: true
}