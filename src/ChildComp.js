import "./styles.css";
import { useEffect } from "react";

export default function ChildComp({ changeName }) {
  const xyz = "test";

  useEffect(() => {
    changeName(xyz);
  }, []);

  return (
    <div className="App">
      <h1>Child Component</h1>
    </div>
  );
}
