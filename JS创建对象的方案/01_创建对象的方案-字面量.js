const p1 = {
  name: 'kobe',
  age: '18',
  height: 190,
  eat: function () {
    console.log('eating')
  },
  run: function () {
    console.log('running')
  }
}

const p2 = {
  name: 'tom',
  age: '18',
  height: 150,
  eat: function () {
    console.log('eating')
  },
  run: function () {
    console.log('running')
  }
}

const p3 = {
  name: 'tomas',
  age: '58',
  height: 170,
  eat: function () {
    console.log('eating')
  },
  run: function () {
    console.log('running')
  }
}

// 字面量很简便，但是如果有多个对象需要创建，且这些对象都有一些共通点(eat,run)，就很繁琐了。
// 所以就有了工厂模式，和类了。