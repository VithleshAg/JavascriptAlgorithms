import "./styles.css";
// import ChildComp from "./ChildComp";
// import { useState } from "react";

export default function App() {
  // Big O - O(n)

  const findNumberByBinarySearch = (arr, n) => {
    let l = arr.length;
    let m = parseInt((l + 1) / 2) - 1;

    if (arr[m] > n)
      return findNumberByBinarySearch(arr.slice(0, m), n) === -1
        ? -1
        : findNumberByBinarySearch(arr.slice(0, m), n);
    else if (arr[m] === n) return m;
    else if (arr[m] < n)
      return findNumberByBinarySearch(arr.slice(m + 1), n) === -1
        ? -1
        : m + 1 + findNumberByBinarySearch(arr.slice(m + 1), n);
    else return -1;
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {findNumberByBinarySearch([-3, -1, 0, 1, 2, 3, 4, 5, 9, 11, 16], 1)}
    </div>
  );
}
