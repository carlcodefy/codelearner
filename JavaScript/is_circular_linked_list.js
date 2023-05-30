/*

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.



Example 1:


Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
Example 2:

Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
Example 3:


Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
 

Constraints:

The number of the nodes in the list is in the range [0, 104].
-105 <= Node.val <= 105
pos is -1 or a valid index in the linked-list.
 

Follow up: Can you solve it using O(1) (i.e. constant) memory?

*/
class ListNode {
    constructor(val, next) {
      this.val = val;
      this.next = next;
    }
}
  
// Creating the list nodes
const listNode3 = new ListNode(0, null);
const listNode2 = new ListNode(2, listNode3);
const listNode1 = new ListNode(3, listNode2);

// Assigning the value to the variable
const head = listNode1;
  
var hasCycle = (head) => {
    let rabbit = head, tortoise = head;
    while( rabbit && rabbit.next) {
        rabbit = rabbit.next.next;
        tortoise = tortoise.next;

        if( rabbit === tortoise) {
            return true;
        }
    }
    return false;
}

console.dir(hasCycle(head));