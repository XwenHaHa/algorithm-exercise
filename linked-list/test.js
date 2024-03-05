function ListNode(val) {
  this.val = val;
  this.next = null;
}

const node1 = new ListNode(1);
const node3 = new ListNode(3);
node1.next = new ListNode(2);
node3.next = node1.next;
node1.next = node3;

const target = node1.next;
node1.next = target.next;

console.log(node1);
