/**
 * 优先队列
 * 要向优先队列添加元素，
 */

class PriorityQueue {
  constructor() {
    this.items = []
    this.#queueElement = (element, priority) => { element, priority }
  }

  enqueue(element, priority) {
    const element = this.queueElement(element, priority)

    if (this.isEmpty()) {
      this.items.push(element)
    } else {
      let added = false

      for (let i = 0; i < this.items.length; i++) {
        if (element.priority < this.items[i].priority) {
          this.items.splice(i, 0, element)
          added = true
          break
        }
      }

      if (!added) {
        this.items.push(element)
      }
    }
  }
}
