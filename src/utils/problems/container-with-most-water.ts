import assert from "assert";
import { Problem } from "../types/problem";
import example from "./images/question_11.jpg";

export const containerMostWaterHandler = (fn: any) => {
  try {
    const tests = [
      [1, 8, 6, 2, 5, 4, 8, 3, 7],
      [1, 1],
    ];
    const answers = [49, 1];

    const failedTestCases: number[] = [];

    for (let i = 0; i < tests.length; i++) {
      try {
        const result = fn(tests[i]);
        assert.equal(result, answers[i]);
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
    console.log("Error from containerMostWaterHandler: ", error);
    throw new Error(error);
  }
};

const starterCodeContainerWaterJS = `function maxArea(height) {
  // Write your code here
};`;

export const containerMostWater: Problem = {
  id: "container-with-most-water",
  title: "6. Container With Most Water",
  problemStatement: `<p class='mt-3'>
    You are given an integer array <code>height</code> of length <code>n</code>. There are <code>n</code> vertical lines drawn such that the two endpoints of the <code>i<sup>th</sup></code> line are <code>(i, 0)</code> and <code>(i, height[i])</code>.
  </p>
  <p class='mt-3'>Find two lines that together with the x-axis form a container, such that the container contains the most water.</p>
    <p class='mt-3' style={{fontStyle: 'italic'}}>
    Return the maximum amount of water a container can store.
    </p>
    <p class='mt-3'>Notice that you may not slant the container.</p>
  `,

  examples: [
    {
      id: 0,
      inputText: `height = [1,8,6,2,5,4,8,3,7]`,
      outputText: `49`,
      explanation:
        "The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.",
      img: example.src,
    },
    {
      id: 1,
      inputText: `height = [1,1]`,
      outputText: `1`,
    },
  ],
  constraints: `<li class='mt-2'><code>n == height.length</code></li>
    <li class='mt-2'><code>2 <= n <= 10<sup>5</sup></code></li><li class='mt-2'><code>0 <= height[i] <= 10<sup>4</sup></code></li>`,
  starterCode: starterCodeContainerWaterJS,
  handlerFunction: containerMostWaterHandler,
  starterFunctionName: "function maxArea(",
  order: 6,
};
