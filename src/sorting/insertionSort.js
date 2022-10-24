import "./styles.css";

export default function App() {
  //Big O - O(n^2)

  const insertionSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let val = arr[i + 1];

        let j = i;
        while (j >= 0 && arr[j] > val) {
          arr[j + 1] = arr[j];
          j--;
        }
        arr[j + 1] = val;
      }
    }

    return arr;
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      [5, 1, -1, 8]: {insertionSort([5, 1, -1, 8])}
      <br />
      [5, 1, -1, -8]: {insertionSort([5, 1, -1, -8])}
      <br />
      [6, 5, -4, 2]: {insertionSort([6, 5, -4, 2])}
    </div>
  );
}
