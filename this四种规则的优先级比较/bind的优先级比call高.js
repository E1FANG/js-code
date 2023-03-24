function fn (){
  console.log(this)
}

fn.bind('bind').call('call') // 'bind'