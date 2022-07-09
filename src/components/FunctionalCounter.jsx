import React from "react";
import { useState } from "react";

function FunctionalCounter() {
  const [count, setCount] = useState(0);
  return (
    <div className="box">
      <h1>Functional component</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)} style={{ margin: "10px" }}>
        +
      </button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default FunctionalCounter;
