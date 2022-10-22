import "./styles.css";

export default function App() {
  // Binary search is done for sorted array
  //Big O - O(log n)

  // const recursiveBinarySearch = (arr, n) => {
  //   let l = arr.length;
  //   let m = parseInt((l + 1) / 2) - 1;

  //   if (arr[m] > n)
  //     return recursiveBinarySearch(arr.slice(0, m), n) === -1
  //       ? -1
  //       : recursiveBinarySearch(arr.slice(0, m), n);
  //   else if (arr[m] === n) return m;
  //   else if (arr[m] < n)
  //     return recursiveBinarySearch(arr.slice(m + 1), n) === -1
  //       ? -1
  //       : m + 1 + recursiveBinarySearch(arr.slice(m + 1), n);
  //   else return -1;
  // };

  const recursiveBinarySearch = (arr, n) => {
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
      {recursiveBinarySearch([-3, -1, 0, 1, 2, 3, 4, 5, 9, 11, 16], 11)}
    </div>
  );
}
