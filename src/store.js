import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

function currentFeedbackItem(state = {}, action) {
  // actions

  return state;
}

// define store instance
export const feedbackStore = createStore(
  combineReducers({ currentFeedbackItem }, applyMiddleware(logger))
);
