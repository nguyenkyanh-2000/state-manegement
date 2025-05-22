import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, updateName } from "./actions";

const Counter = () => {
  console.log("Redux Counter component rendered");
  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px" }}>
      <h2>Redux Example</h2>
      <LevelOne />
    </div>
  );
};

const LevelOne = () => {
  console.log("Redux LevelOne component rendered");
  const name = useSelector((state) => state.name);
  const dispatch = useDispatch();
  return (
    <div style={{ padding: "20px", border: "1px solid #ddd", margin: "10px" }}>
      <h3>Level One Component</h3>
      <p>Name: {name}</p>
      <button onClick={() => dispatch(updateName())}>Toggle Name</button>
      <LevelTwo />
    </div>
  );
};

const LevelTwo = () => {
  console.log("Redux LevelTwo component rendered");
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "20px", border: "1px solid #eee", margin: "10px" }}>
      <h3>Level Two Component</h3>
      <div>
        <p>Count: {count}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
