/*
Reorder a linked list in a specific way.
Given 1->2->3->4->5, reorder it to 1->5->2->4->3.

As per leetcode:
Runtime: 100 ms, faster than 96.47% of JavaScript online submissions for Reorder List.
Memory Usage: 46.1 MB, less than 8.14% of JavaScript online submissions for Reorder List.
*/

const reorderList = (head) => {
    if (!head) {
        return null;
    } else if (head && !head.next) {
        return head;
    }

    const linkedListAsArr = [];

    let current = head,
        counter = 1,
        left,
        right;

    while (current) {
        linkedListAsArr.push(current)
        current = current.next;
    }

    current = head;
    left = 1;
    right = linkedListAsArr.length - 1;

    while (left <= right) {
        if (counter % 2 == 0) {
            current.next = linkedListAsArr[left];
            left++;
        } else {
            current.next = linkedListAsArr[right];
            right--;
        }
        counter++;
        current = current.next;
    }
    current.next = null;
};
