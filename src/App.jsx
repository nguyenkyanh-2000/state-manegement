import React from "react";
import { Provider } from "react-redux";
import { store as reduxStore } from "./examples/redux/store";
import { store as reduxRtkStore } from "./examples/redux-rtk/store";
import PropDrillingCounter from "./examples/prop-drilling/Counter";
import ContextCounter from "./examples/context/CounterContext";
import ReduxCounter from "./examples/redux/Counter";
import ReduxRtkCounter from "./examples/redux-rtk/Counter";
import ZustandCounter from "./examples/zustand/Counter";

function App() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1>React State Management Examples</h1>

      <PropDrillingCounter />

      <ContextCounter />

      <Provider store={reduxStore}>
        <ReduxCounter />
      </Provider>

      <Provider store={reduxRtkStore}>
        <ReduxRtkCounter />
      </Provider>

      <ZustandCounter />
    </div>
  );
}

export default App;
