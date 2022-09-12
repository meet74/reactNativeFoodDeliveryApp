import React from "react";
import { Provider } from "react-redux";
import store from "./src/store";
import Navigation from "./src/navigation";
import "./nativewind-output";

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
