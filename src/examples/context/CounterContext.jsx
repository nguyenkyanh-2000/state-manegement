import React, { createContext, useContext, useState } from "react";

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("John");

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const updateName = () => setName(name === "John" ? "Jane" : "John");

  return (
    <CounterContext.Provider
      value={{ count, increment, decrement, name, updateName }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
};

const Counter = () => {
  console.log("Context Counter component rendered");
  return (
    <CounterProvider>
      <div
        style={{ padding: "20px", border: "1px solid #ccc", margin: "10px" }}
      >
        <h2>Context API Example</h2>
        <LevelOne />
      </div>
    </CounterProvider>
  );
};

const LevelOne = () => {
  console.log("Context LevelOne component rendered");
  const { name, updateName } = useCounter();
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
  console.log("Context LevelTwo component rendered");
  const { count, increment, decrement } = useCounter();

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
