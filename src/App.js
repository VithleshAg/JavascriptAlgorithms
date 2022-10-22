import "./styles.css";

export default function App() {
  // Binary search is done for sorted array
  //Big O - O(log n)

  const findNumberByRecursiveBinarySearch = (arr, n) => {
    return search(arr, n, 0, arr.length - 1);
  };

  const search = (arr, n, li, ri) => {
    let m = parseInt((li + ri) / 2);

    if (li > ri) return -1;
    else if (arr[m] === n) return m;
    else if (arr[m] > n) return search(arr, n, li, m - 1);
    else if (arr[m] < n) return search(arr, n, m + 1, ri);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {findNumberByRecursiveBinarySearch(
        [-3, -1, 0, 1, 2, 3, 4, 5, 9, 11, 16],
        29
      )}
    </div>
  );
}
