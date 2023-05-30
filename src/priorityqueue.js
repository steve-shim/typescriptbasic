var PriorityQueue = require('priorityqueuejs');

var queue = new PriorityQueue(function(a, b) {
  return a.cash - b.cash;
});

queue.enq({ cash: 250, name: 'Valentina' });
queue.enq({ cash: 300, name: 'Jano' });
queue.enq({ cash: 150, name: 'Fran' });
console.log(queue.size()); // 3
console.log(queue.deq()); // { cash: 300, name: 'Jano' }
console.log(queue.peek()); // { cash: 250, name: 'Valentina' }
console.log(queue.size()); // 2