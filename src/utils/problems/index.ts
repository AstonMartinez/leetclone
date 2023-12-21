import { Problem } from "../types/problem";
import { jumpGame } from "./jump-game";
import { reverseLinkedList } from "./reverse-linked-list";
import { search2DMatrix } from "./search-a-2d-matrix";
import { twoSum } from "./two-sum";
import { validParentheses } from "./valid-parentheses";
import { mergeIntervals } from "./merge-intervals";
import { containerMostWater } from "./container-with-most-water";
import { maxDepthBTree } from "./maximum-depth-binary-tree";
import { buySellStock } from "./best-time-to-buy-sell-stocks";
import { subsets } from "./subsets";

interface ProblemMap {
  [key: string]: Problem;
}

export const problems: ProblemMap = {
  "two-sum": twoSum,
  "reverse-linked-list": reverseLinkedList,
  "jump-game": jumpGame,
  "search-a-2d-matrix": search2DMatrix,
  "valid-parentheses": validParentheses,
  "merge-intervals": mergeIntervals,
  "container-with-most-water": containerMostWater,
  "maximum-depth-of-binary-tree": maxDepthBTree,
  "best-time-to-buy-and-sell-stock": buySellStock,
  subsets: subsets,
};
