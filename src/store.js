import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

function feedbackList(state = [], action) {
  // actions

  return state;
}

// define store instance
export const feedbackStore = createStore(
  combineReducers({ feedbackList }, applyMiddleware(logger))
);
