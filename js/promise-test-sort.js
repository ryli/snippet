const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const p = (n) => Promise.resolve(n).then(console.log)

async function test() {
  p(1)
  p(2)
  p(3)
}

test()
