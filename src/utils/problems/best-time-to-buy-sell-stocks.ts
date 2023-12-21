import assert from "assert";
import { Problem } from "../types/problem";

const buySellStocksStarterCode = `function maxProfit(prices) {
    // Write your code here
};`;

// checks if the user has the correct code
const buySellStockHandler = (fn: any) => {
  try {
    const inputs = [
      [7, 1, 5, 3, 6, 4],
      [7, 6, 4, 3, 1],
    ];

    const answers = [5, 0];

    const failedTestCases: number[] = [];

    for (let i = 0; i < inputs.length; i++) {
      try {
        const result = fn(inputs[i]);
        assert.deepStrictEqual(result, answers[i]);
      } catch (error) {
        failedTestCases.push(i);
      }
    }

    if (failedTestCases.length > 0) {
      console.log("Failed test cases:", failedTestCases);
      return `${failedTestCases}`;
    }

    return "true";
  } catch (error: any) {
    console.log("buySellStock handler function error");
    throw new Error(error);
  }
};

export const buySellStock: Problem = {
  id: "best-time-to-buy-and-sell-stock",
  title: "9. Best Time to Buy and Sell Stock",
  problemStatement: `<p class='mt-3'>
  You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the i<sup>th</sup> day.
</p>
<p class='mt-3'>
  You want to maximize your profit by choosing a <strong>single day</strong> to buy one stock and choosing a <strong>different day in the future</strong> to sell that stock.
</p>
<p class='mt-3'>Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return <code>0</code>.</p>`,
  examples: [
    {
      id: 1,
      inputText: "prices = [7,1,5,3,6,4]",
      outputText: "5",
      explanation:
        "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5. Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.",
    },
    {
      id: 2,
      inputText: "prices = [7,6,4,3,1]",
      outputText: "0",
      explanation:
        "In this case, no transactions are done and the max profit = 0.",
    },
  ],
  constraints: `<li class='mt-2'>
  <code>1 ≤ prices.length ≤ 10<sup>5</sup></code>
</li> <li class='mt-2'>
<code>-0 ≤ prices[i] ≤ 10<sup>4</sup></code>
</li>`,
  handlerFunction: buySellStockHandler,
  starterCode: buySellStocksStarterCode,
  order: 9,
  starterFunctionName: "function maxProfit(",
};
