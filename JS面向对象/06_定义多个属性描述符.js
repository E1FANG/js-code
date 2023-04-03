var obj = {}

Object.defineProperties(obj, {
  name: {
    writable: false,
    value: 'hasson'
  },
  age: {
    get() {
      return 18
    }
  }
})