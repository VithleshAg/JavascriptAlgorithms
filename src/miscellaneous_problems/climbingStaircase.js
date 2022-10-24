import "./styles.css";

export default function App() {
  //Big O - O(n)

  const climbingStaircase = (n) => {
    let noOfWays = [1, 2];

    for (let i = 2; i < n; i++) noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];

    return noOfWays[n - 1];
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      3: {climbingStaircase(3)}
      <br />
      4: {climbingStaircase(4)}
      <br />
      5: {climbingStaircase(5)}
      <br />
      6: {climbingStaircase(6)}
      <br />
      7: {climbingStaircase(7)}
    </div>
  );
}
