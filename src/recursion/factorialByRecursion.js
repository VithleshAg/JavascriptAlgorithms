import "./styles.css";

export default function App() {
  // Big O - O(n)

  const factorialByRecursion = (n) => {
    if (n < 0) return "Invalid input";
    if (n < 2) return 1;
    return n * factorialByRecursion(n - 1);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {factorialByRecursion(6)}
    </div>
  );
}
