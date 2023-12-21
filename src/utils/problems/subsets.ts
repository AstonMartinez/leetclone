import assert, { fail } from "assert";
import { Problem } from "../types/problem";

const starterCodeSubsets = `function subsets(nums) {
    // Write your code here
};`;

// checks if the user has the correct code
const handlerSubsets = (fn: any) => {
  try {
    const nums = [[1, 2, 3], [0]];

    const answers = [
      [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]],
      [[], [0]],
    ];

    const failedTestCases: number[] = [];

    for (let i = 0; i < nums.length; i++) {
      const result = fn(nums[i]);
      result.sort();
      answers[i].sort();
      if (JSON.stringify(result) !== JSON.stringify(answers[i]))
        failedTestCases.push(i);
    }

    if (failedTestCases.length > 0) {
      console.log("Failed test cases:", failedTestCases);
      return `${failedTestCases}`;
    }

    return "true";
  } catch (error: any) {
    console.log("subsets handler function error");
    throw new Error(error);
  }
};

export const subsets: Problem = {
  id: "subsets",
  title: "10. Subsets",
  problemStatement: `<p class='mt-3'>
  Given an integer array <code>nums</code> of unique elements, return all possible subsets (a subset of an array is a selection of elements - possibly none - of the array) - the power set.
</p>
<p class='mt-3'>
  The solution set <em>must not</em> contain duplicate subsets. Return the solution in <em>any order</em>.
</p>`,
  examples: [
    {
      id: 1,
      inputText: "nums = [1,2,3]",
      outputText: "[[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]]",
    },
    {
      id: 2,
      inputText: "nums = [0]",
      outputText: "[[], [0]]",
    },
  ],
  constraints: `<li class='mt-2'>
  <code>1 <= nums.length <= 10</code>
</li> <li class='mt-2'>
<code>-10 <= nums[i] <= 10</code>
</li> <li class='mt-2'>
All the numbers of <code>nums</code> are <em>unique</em>.
</li>`,
  handlerFunction: handlerSubsets,
  starterCode: starterCodeSubsets,
  order: 10,
  starterFunctionName: "function subsets(",
};
