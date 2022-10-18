import "./styles.css";
// import ChildComp from "./ChildComp";
// import { useState } from "react";

export default function App() {
  // const [name, setName] = useState("Vithlesh");

  const changeName = () => {
    let arr = [2, 3, 6, 1, 4];
    let largestNum = [...arr].sort()[arr.length - 1];
    let largestNumInd = arr.indexOf(largestNum);

    let leftSum = 0;
    let rightSum = 0;
    let result = -1;

    console.log("arr: ", arr);
    for (let i = 0; i < largestNumInd; i++) {
      leftSum += arr[i];
      console.log("leftSum", arr[i], " ", i);
    }

    for (let j = largestNumInd + 1; j < arr.length; j++) {
      rightSum += arr[j];
      console.log("rightSum", arr[j], " ", j);
    }

    if (leftSum === rightSum && leftSum === largestNum) {
      result = largestNumInd;
    }

    return result;
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {changeName()}
    </div>
  );
}
