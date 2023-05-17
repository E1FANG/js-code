const page = 10

async function* fetchData(){
  const res =  await fetch(`https://swapi.dev/api/people/`)
  const data = await res.json()
  yield data
}

const res = []

for await(const page of fetchData){
  console.log(page)
  res = [...res,...page]
  console.log(res)
}