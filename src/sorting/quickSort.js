import "./styles.css";

export default function App() {
  //Worst case - Big O - O(n^2) => when array is already sorted
  //Avg case - Big O - O(nlogn)

  const quickSort = (arr) => {
    if (arr.length < 2) return arr;

    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) left.push(arr[i]);
      else right.push(arr[i]);
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      [5, 1, -1, 8]: {quickSort([5, 1, -1, 8])}
      <br />
      [6, 5, -4, 2]: {quickSort([6, 5, -4, 2])}
    </div>
  );
}
