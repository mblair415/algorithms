/*
Two numbers are provided as linked lists where each node is a single digit of that number.
238 becomes 2 -> 3 -> 8 -> null
Add the two numbers together.

There will be no leading zeros.
You will have the ability to create new nodes.

leetcode medium (first pass)
Runtime: 124 ms, faster than 95.94% of JavaScript online submissions for Add Two Numbers II.
Memory Usage: 43.6 MB, less than 6.09% of JavaScript online submissions for Add Two Numbers II.
*/

const addTwoNumbers = (l1, l2) => {
    let list1Conversion,
        list2Conversion,
        longer,
        shorter,
        output,
        carry = 0;

    const reverseList = root => {
        if (!root) return [root, 0];
        if (root && !root.next) return [root, 1];

        let current = root,
            next = root.next,
            previous = null,
            counter = 0;
            
        while (current) {
            current.next = previous;
            previous = current;
            current = next;
            if (next) {
                next = next.next;
            }
            counter++;
        }
        return [previous, counter];
    }
    list1Conversion = reverseList(l1);
    list2Conversion = reverseList(l2);


    if (list1Conversion[1] >= list2Conversion[1]) {
        longer = list1Conversion[0];
        output = list1Conversion[0];
        shorter = list2Conversion[0];
    } else {
        longer = list2Conversion[0];
        output = list2Conversion[0];
        shorter = list1Conversion[0];
    }

    while (longer) {
        longer.val += (shorter ? shorter.val : 0) + carry;
        carry = longer.val > 9 ? 1 : 0;
        longer.val = longer.val % 10;

        if (!longer.next && carry) {
            longer.next = new ListNode(0);
        }

        longer = longer.next;
        shorter = shorter ? shorter.next : null;
    }

    return reverseList(output)[0];
};
