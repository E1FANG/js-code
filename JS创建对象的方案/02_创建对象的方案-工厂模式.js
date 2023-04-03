// 工厂模式- 工厂函数

function createPerson(name, age, height) {
  var obj = {}
  obj.name = name
  obj.age = age
  obj.height = height
  obj.eat = function () {
    console.log('eating')
  }
  obj.run = function () {
    console.log('running')
  }
}

var p1 = createPerson('kobe', 18, 190)
var p2 = createPerson('tom', 18, 150)
var p3 = createPerson('tomas', 48, 170)

// 工厂模式的缺点：获取不到对象最真实的类型。
// 比如我们上面创建的是 Person的类型。
// 如果下次是 createDog函数创建呢，也没有暴露出dog类型的信息

// 接下来就有个方法可以解决类型的问题。 构造函数的方式