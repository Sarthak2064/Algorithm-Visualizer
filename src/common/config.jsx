import { getScreenWidth } from "./helper";
import { QuickSort } from "../sortFunctions/QuickSort";
import { MergeSort } from "../sortFunctions/MergeSort";
import { HeapSort } from "../sortFunctions/HeapSort";
import { BubbleSort } from "../sortFunctions/BubbleSort";
import { SelectionSort } from "../sortFunctions/SelectionSort";
import { InsertionSort } from "../sortFunctions/InsertionSort";
import { OddEvenSort } from "../sortFunctions/OddEvenSort";

// colors
export const comparisionColor = "sandybrown";
export const swapColor = "cyan";
export const sortedColor = "mediumspringgreen";
export const pivotColor = "gold";

// time
export let swapTime = 1000;
export let compareTime = 500;

// initial array
export let sortingArray = initArrayForScreenSize();

export const sortingAlgorithms = [
  {
    component: QuickSort,
    title: "Quick",
    name: "Quick Sort",
    info: "https://www.geeksforgeeks.org/quick-sort/",
  },
  {
    component: MergeSort,
    title: "Merge",
    name: "Merge Sort",
    info: "https://www.geeksforgeeks.org/merge-sort/",
  },
  {
    component: HeapSort,
    title: "Heap",
    name: "Heap Sort",
    info: "https://www.geeksforgeeks.org/heap-sort/",
  },
  {
    component: BubbleSort,
    title: "Bubble",
    name: "Bubble Sort",
    info: "https://www.geeksforgeeks.org/bubble-sort/",
  },
  {
    component: SelectionSort,
    title: "Selection",
    name: "Selection Sort",
    info: "https://www.geeksforgeeks.org/selection-sort/",
  },
  {
    component: InsertionSort,
    title: "Insertion",
    name: "Insertion Sort",
    info: "https://www.geeksforgeeks.org/insertion-sort/",
  },

  {
    component: OddEvenSort,
    title: "Odd Even",
    name: "Odd Even Sort",
    info: "https://www.geeksforgeeks.org/odd-even-sort-brick-sort/",
  },
];

function initArrayForScreenSize() {
  const screenSize = getScreenWidth();
  if (screenSize < 460) return [40, 30, 20, 10];
  else if (screenSize < 720) return [60, 50, 40, 30, 20, 10];
  return [80, 70, 60, 50, 40, 30, 20, 10];
}
