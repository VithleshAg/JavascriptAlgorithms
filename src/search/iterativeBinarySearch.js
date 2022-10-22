import "./styles.css";

export default function App() {
  // Binary search is done for sorted array
  //Big O - O(log n)

  const iterativeBinarySearch = (arr, n) => {
    let li = 0;
    let ri = arr.length - 1;

    while (li <= ri) {
      let m = parseInt((li + ri) / 2);

      console.log("li, ri, m : ", li, ri, m);

      if (arr[m] > n) ri = m - 1;
      else if (arr[m] < n) li = m + 1;
      else if (arr[m] === n) return m;
    }

    return -1;
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {iterativeBinarySearch([-3, -1, 0, 1, 2, 3, 4, 5, 9, 11, 16], 16)}
    </div>
  );
}
