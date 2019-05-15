/*
leetcode problem:
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.



Runtime: 56 ms, faster than 99.31% of JavaScript online submissions for Best Time to Buy and Sell Stock.

Memory Usage: 35.4 MB, less than 64.88% of JavaScript online submissions for Best Time to Buy and Sell Stock.

*/

const maxProfit = function(prices) {
    let buy = 0;
    let sell = 0;
    let max = 0;

    while (sell < prices.length) {
        if (prices[sell] < prices[buy]) {
            buy = sell;
        }
        if (prices[sell] - prices[buy] > max) {
            max = prices[sell] - prices[buy];
        }
        sell++;
    }

    return max;
};
