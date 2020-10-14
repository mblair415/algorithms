/*
return true if the values of nodes within a linked list form a palindrome.


Results from leetcode:
Runtime: 72 ms, faster than 98.26% of JavaScript online submissions for Palindrome Linked List.
Memory Usage: 42.6 MB, less than 5.52% of JavaScript online submissions for Palindrome Linked List.
*/

const isPalindrome = head => {
    if (!head) {
        return true;
    }

    const createArr = () => {
        let current = head;
        const result = [];

        while (current) {
            result.push(current.val);
            current = current.next;
        }

        return result;
    };
    const checkForPalindrome = arr => {
        let left = 0,
            right = arr.length - 1;

        while (left <= right) {
            if (arr[left] != arr[right]) {
                return false;
            }
            left++;
            right--;
        }

        return true;
    };
    const listAsArr = createArr();

    return checkForPalindrome(listAsArr);
};
