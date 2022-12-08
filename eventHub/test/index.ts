import EventHub from "../src/index";


type testCase = (message: string) => void

const test1: testCase = (message) => {
  const eventHub = new EventHub()
  console.assert(eventHub instanceof Object === true, "eventHub是一个对象");
  console.log(message);
}

const test2: testCase = (message) => {
  const eventHub = new EventHub()
  let called = false
  eventHub.on('xxx', (y) => {
    called = true
    console.assert(y === '试试');
  })
  eventHub.emit("xxx", '试试')
  setTimeout(() => {
    console.assert(called === true);
    console.log(message);
  }, 1000)
}


const test3: testCase = (message) => {
  const eventHub = new EventHub()
  let called2 = false
  const fn1 = () => {
    called2 = true
  }
  eventHub.on('xxx', fn1)

  eventHub.off('xxx', fn1)
  eventHub.emit('xxx')
  setTimeout(() => {
    console.assert(called2 === false)
    console.log(message);
  }, 1000)

}

test1('eventHub是一个对象')
test2('.on之后触发emit有效')
test3('.off 有效')
