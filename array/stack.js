// 栈是一种后进先出的结构，举例可以是卖冰淇淋后面放的货先取出
const stack = [];

stack.push("东北大板");
stack.push("巧乐兹");
stack.push("冰工厂");
stack.push("小布丁");
stack.push("老冰棍");

console.log(stack);

while (stack.length) {
  // 获取栈顶元素
  const stackTop = stack[stack.length - 1];
  console.log("当前取出的冰淇淋是:", stackTop);
  stack.pop();
}
