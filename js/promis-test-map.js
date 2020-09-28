const p = Array.from({ length: 100 }).fill(1)

const delay = async (ms) => ms ? setTimeout(() => {}, ms) : null

async function test() {
  console.log('start')

  await Promise.all(p.map(async (_, i) => {
    console.log('before', i)
    if (maybe()) await delay(1)
    console.log('middle', i)
    if (maybe()) await delay(1)
    console.log(i)
  }))

  console.log('end')
}

test()

function maybe() {
  return !!Math.floor(Math.random() * 2)
}
