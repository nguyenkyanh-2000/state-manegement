import React from "react";
import useCounterStore from "./counterStore";

const Counter = () => {
  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px" }}>
      <h2>Zustand Example</h2>
      <LevelOne />
    </div>
  );
};

const LevelOne = () => {
  return (
    <div style={{ padding: "20px", border: "1px solid #ddd", margin: "10px" }}>
      <h3>Level One Component</h3>
      <LevelTwo />
    </div>
  );
};

const LevelTwo = () => {
  const { count, increment, decrement } = useCounterStore();

  return (
    <div style={{ padding: "20px", border: "1px solid #eee", margin: "10px" }}>
      <h3>Level Two Component</h3>
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
