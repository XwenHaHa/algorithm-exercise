// 队列是一种先进先出的结构，举例餐厅的顾客先排队先取餐
const queue = [];

queue.push("第一位顾客");
queue.push("第二位顾客");
queue.push("第三位顾客");

while (queue.length) {
  // 取队首元素
  const queueTop = queue[0];
  console.log(queueTop, "请取餐");
  // 队首元素出队
  queue.shift();
}
