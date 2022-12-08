// eventHub 是用于多个模块通信的

class EventHub {
  cache: { [key: string]: Array<(data: unknown) => void> } = {
    // 羊城晚报:[fn1,fn2,fn3]
  }
  on(eventName: string, fn: (data: unknown) => void) {
    // 把 fn 推进 this.cache[eventName] 数组
    this.cache[eventName] = this.cache[eventName] || []
    this.cache[eventName].push(fn)
  }
  emit(eventName: string, data?: unknown) {
    // 把 this.cache[name] 数组里面的 fn 全部依次调用
    (this.cache[eventName] || []).forEach(fn => fn(data))
  }
  off(eventName: string, fn: (data: unknown) => void) {
    // 把 fn 从 this.cache[eventName] 数组中删掉
    // this.cache[eventName] = this.cache[eventName] || []
    let index = indexOf(this.cache[eventName], fn)
    if (index === -1) return
    this.cache[eventName].splice(index, 1)
  }
}

export default EventHub

/**
 * 帮助函数 indexOf
 * @param {*} array 
 * @param {*} item 
 * @returns 
 */

// type fn = (data: unknown) => void

function indexOf<T>(array: Array<T>, item: T) {
  if (array === undefined) return -1
  let index = -1
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      index = i
    }
  }
  return index
}