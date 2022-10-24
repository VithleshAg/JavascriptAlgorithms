import "./styles.css";

export default function App() {
  //Big O - O(nlogn) => best time complexity for sorting

  const mergeSort = (arr) => {
    if (arr.length < 2) return arr;

    let m = parseInt(arr.length / 2);
    let left = arr.slice(0, m);
    let right = arr.slice(m);

    return merge(mergeSort(left), mergeSort(right));
  };

  const merge = (leftArr, rightArr) => {
    let sortedArr = [];
    while (leftArr.length && rightArr.length) {
      if (leftArr[0] < rightArr[0]) sortedArr.push(leftArr.shift());
      else sortedArr.push(rightArr.shift());
    }
    return [...sortedArr, ...leftArr, ...rightArr];
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {/* [5, 1, -1, 8]: {mergeSort([5, 1, -1, 8])}
      <br /> */}
      [6, 5, -4, 2]: {mergeSort([6, 5, -4, 2])}
    </div>
  );
}
