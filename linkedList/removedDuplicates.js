/*
From leetcode:

Given a sorted linked list, delete all duplicates such that each element appear only once.

Example 1:

Input: 1->1->2
Output: 1->2
Example 2:

Input: 1->1->2->3->3
Output: 1->2->3




Runtime: 72 ms, faster than 33.06% of JavaScript online submissions for Remove Duplicates from Sorted List.
Memory Usage: 36.2 MB, less than 12.50% of JavaScript online submissions for Remove Duplicates from Sorted List.

ex 1:
 input: 1 -> 1 -> 2
 output: 1 -> 2

ex 2:
 input: 1 -> 1 -> 2 -> 3 -> 3
 output: 1 -> 2 -> 3 -> 3

                   c
    1 -  1 -> 2 -> 3 -> 3
      \      /|
        ----
                           a



current = 1
adjacent = 1

current = head
adjacent = current.next
while current && adjacent
    if current.value != adjacent.value
        current.next = adjacent
        current = adjacent
    adjacent = adjacent.next
if !adjacent
    current.next = adjacent


return head

*/
var deleteDuplicates = function(head) {
    if (!head) {
        return head;
    }

    let current = head,
        adjacent = current.next;

    while (current && adjacent) {
        if (current.val != adjacent.val) {
            current.next = adjacent;
            current = adjacent;
        }
        adjacent = adjacent.next;

    }

    if (!adjacent) {
        current.next = adjacent;
    }

    return head;
};
