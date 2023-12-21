import assert from "assert";
import { Problem } from "../types/problem";
import example from "./images/tmp-tree.jpg";

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val ?? 0;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}

export const maxDepthBinaryTreeHandler = (
  fn: (root: TreeNode | null) => number
) => {
  try {
    const tests = [
      {
        input: new TreeNode(
          3,
          new TreeNode(9),
          new TreeNode(20, new TreeNode(15), new TreeNode(7))
        ),
        output: 3,
      },
      {
        input: new TreeNode(1, null, new TreeNode(2)),
        output: 2,
      },
    ];

    const failedTestCases: number[] = [];

    for (let i = 0; i < tests.length; i++) {
      try {
        const result = fn(tests[i].input);
        assert.strictEqual(result, tests[i].output);
      } catch (error) {
        failedTestCases.push(i);
      }
    }

    if (failedTestCases.length > 0) {
      return `${failedTestCases}`;
    }

    return "true";
  } catch (error: any) {
    console.error("Error from maxDepthBinaryTreeHandler: ", error);
    throw new Error(error);
  }
};

const starterCodeMaxDepthBTree = `function maxDepth(root) {
  // Write your code here
};`;

export const maxDepthBTree: Problem = {
  id: "maximum-depth-of-binary-tree",
  title: "8. Maximum Depth of Binary Tree",
  problemStatement: `<p class='mt-3'>
    Given an array of <code>intervals</code> where <code>intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]</code>, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
  </p>
  `,

  examples: [
    {
      id: 0,
      inputText: `intervals = [[1,3],[2,6],[8,10],[15,18]]`,
      outputText: `[[1,6], [8,10], [15,18]]`,
      explanation:
        "Since intervals [1,3] and [2,6] overlap, merge them into [1,6].",
      img: example.src,
    },
    {
      id: 1,
      inputText: `intervals = [[1,4],[4,5]]`,
      outputText: `[[1,5]]`,
      explanation: "Intervals [1,4] and [4,5] are considered overlapping.",
    },
  ],
  constraints: `<li class='mt-2'><code>1 <= intervals.length <= 10<sup>4</sup></code></li>
    <li class='mt-2'><code>intervals[i].length == 2</code></li><li class='mt-2'><code>0 <= start<sub>i</sub> <= end<sub>i</sub> <= 10<sup>4</sup></code></li>`,
  starterCode: starterCodeMaxDepthBTree,
  handlerFunction: maxDepthBinaryTreeHandler,
  starterFunctionName: "function maxDepth(",
  order: 8,
};
