import "./styles.css";

export default function App() {
  // Bubble sort is poor sorting algorithm and is used for intro of sorting.
  //Big O - O(n^2)

  const bubbleSort = (arr) => {
    return sort(arr, arr.length - 1);
  };

  const sort = (arr, lastInd) => {
    console.log("arr, lastInd : ", arr, lastInd);
    if (lastInd === 0) return arr;

    let updatedLastInd = 0;

    for (let i = 0; i < lastInd; i++) {
      if (arr[i] > arr[i + 1]) {
        let c = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = c;

        updatedLastInd = i;
      }
    }
    return sort(arr, updatedLastInd);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {bubbleSort([5, 1, -1, 8])}
      <br />
      {bubbleSort([5, 1, -1, -8])}
    </div>
  );
}
