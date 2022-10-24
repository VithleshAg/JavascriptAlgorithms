import "./styles.css";

export default function App() {
  //Big O - O(mn)

  const cartesianProduct = (arr1, arr2) => {
    let result = [];
    arr1.forEach((a1) => {
      arr2.forEach((a2) => {
        result.push([a1, a2]);
      });
    });

    return result;
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {/* [5, 1, -1, 8]: {mergeSort([5, 1, -1, 8])}
      <br /> */}
      [6, 5], [2,4,8]: {cartesianProduct([6, 5], [2, 4, 8]) + ""}
    </div>
  );
}
