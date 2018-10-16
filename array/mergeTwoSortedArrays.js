/*
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
Example:

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]

DO NOT RETURN ANYTHING.  Just sort in place.

from leetcode:
Runtime: 52 ms, faster than 100.00% of JavaScript online submissions for Merge Sorted Array.
*/

function mergeTwoSortedArrays(num1, m, nums2, n) {
  let a = nums1.length - 1,
    b = nums2.length - 1;
  m--;

  while (m >= 0 || b >= 0) {
    if (b < 0 || nums1[m] > nums2[b]) {
      nums1[a] = nums1[m];
      m--;
    } else {
      nums1[a] = nums2[b];
      b--;
    }
    a--;
  }

  return nums1;
}
