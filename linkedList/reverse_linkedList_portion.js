/*
reverse a portion of a linked list.
the portion to be reversed starts at input m and it ends with input n.

for example:
Input: 1->2->3->4->5->NULL, m = 2, n = 4
Output: 1->4->3->2->5->NULL


as per leetcode results:
Runtime: 68 ms, faster than 96.35% of JavaScript online submissions for Reverse Linked List II.
Memory Usage: 39 MB, less than 27.69% of JavaScript online submissions for Reverse Linked List II.

*/

const reverseBetween = (head, m, n) => {
    if (m === n) {
        return head;
    }

    let counter = 1,
        previous = null,
        current = head,
        result = head,
        next = head ? head.next : null,
        before,
        startReverse;

    const iterate = () => {
        counter++;
        previous = current;
        current = next;
        next = next ? next.next : null;
    };

    while (current) {
        if (counter === m) {
            before = previous;
            startReverse = current;

            while (counter <= n) {
                if (previous) {
                    current.next = previous;
                }
                if (m === 1 && counter === n) {
                    result = current;
                    startReverse.next = next;
                }
                iterate();
            }
            if (before) {
                before.next = previous;
            }
            startReverse.next = current;
        }
        iterate();
    }
    return result;
};
