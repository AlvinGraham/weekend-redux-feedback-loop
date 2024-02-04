import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

function feedbackList(state = [], action) {
  // actions
}

// define store instance
const feedbackStore = createStore(
  combineReducers({ feedbackList }, applyMiddleware(logger))
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={feedbackStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
