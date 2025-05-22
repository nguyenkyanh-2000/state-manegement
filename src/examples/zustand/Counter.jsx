import React from "react";
import useCounterStore from "./counterStore";

const Counter = () => {
  console.log("Zustand Counter component rendered");
  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px" }}>
      <h2>Zustand Example</h2>
      <LevelOne />
    </div>
  );
};

const LevelOne = () => {
  console.log("Zustand LevelOne component rendered");
  const name = useCounterStore((state) => state.name);
  const updateName = useCounterStore((state) => state.updateName);
  return (
    <div style={{ padding: "20px", border: "1px solid #ddd", margin: "10px" }}>
      <h3>Level One Component</h3>
      <p>Name: {name}</p>
      <button onClick={updateName}>Toggle Name</button>
      <LevelTwo />
    </div>
  );
};

const LevelTwo = () => {
  console.log("Zustand LevelTwo component rendered");
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

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
