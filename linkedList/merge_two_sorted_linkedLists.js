/*
You have two separate sorted linked lists.
Return a single sorted linked list.
You do not have the ability to create a new linked list.

Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]

As per leetcode:
Runtime: 80 ms, faster than 95.28% of JavaScript online submissions for Merge Two Sorted Lists.
Memory Usage: 40.2 MB, less than 16.04% of JavaScript online submissions for Merge Two Sorted Lists.
*/


const mergeTwoLists = (l1, l2) => {
    if (!l1 && !l2) {
        return null;
    } else if (!l1) {
        return l2;
    } else if (!l2) {
        return l1;
    }

    let current1 = l1.val <= l2.val ? l1.next : l1,
        current2 = l2.val < l1.val ? l2.next : l2,
        build = l1.val <= l2.val ? l1 : l2;

    const final = build;

    while (current1 || current2) {
        if (!current2) {
            build.next = current1;

            return final;
        } else if (!current1) {
            build.next = current2;

            return final;
        } else if (current1.val <= current2.val) {
            build.next = current1;
            current1 = current1.next;
        } else {
            build.next = current2;
            current2 = current2.next;
        }
        build = build.next;
    }

    return final;
};
