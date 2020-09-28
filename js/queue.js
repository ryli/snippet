/**
 * 队列
 */

class Queue {
  constructor() {
    this.items = []
  }

  // 向队尾添加数据
  enqueue(element) {
    this.items.push(element)
  }

  // 移除第一个数据
  dequeue() {
    return this.items.shift()
  }

  // 返回第一个数据
  front() {
    return this.items[0]
  }

  isEmpty() {
    return this.items.length === 0
  }

  clear() {
    this.items = []
  }

  size() {
    return this.items.length
  }

  print() {
    console.log(this.items.toString())
  }
}
