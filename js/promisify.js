const promisify = fn => (...args) => new Promise((resolve, reject) => {
  fn(...args, (err, result) => {
    if (err) return reject(err)
    resolve(result)
  })
})

const promisifyAll = target => {
  Reflect.ownKeys(target).forEach(key => {
    if (typeof target[key] === 'function') {
      target[key + 'Async'] = promisify(target[key])
    }
  })
  return target
}
