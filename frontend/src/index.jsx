import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";

import store from "./store";
import App from "./components/App";

const root = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
