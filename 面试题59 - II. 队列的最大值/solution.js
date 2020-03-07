var MaxQueue = function() {
  this.wholeQueue = []
  this.queue = []
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
  if (this.queue.length) {
    return this.queue[0]
  }
  return -1
};


/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
  this.wholeQueue.push(value)
  while (this.queue.length && this.queue[this.queue.length - 1] < value) {
    this.queue.pop()
  }
  this.queue.push(value)
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
  if (!this.wholeQueue.length) {
    return -1
  }
  const temp = this.wholeQueue.shift()
  if (temp === this.queue[0]) this.queue.shift()
  return temp
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */