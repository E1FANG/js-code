function fn(){
  console.log(this)
}

fn.bind(null)() // window
fn.call(undefined) // window
fn.call(0) // 0