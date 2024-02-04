import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

function currentFeedbackItem(
  state = { feeling: null, understanding: null, support: null, comments: null },
  action
) {
  // actions
  if (action.type === "SET_FEELING") {
    const newState = Object.assign({}, state);
    newState.feeling = action.payload.feeling;

    return newState;
  }

  if (action.type === "SET_UNDERSTANDING") {
    const newState = Object.assign({}, state);
    newState.understanding = action.payload.understanding;

    return newState;
  }

  return state;
}

// define store instance
export const feedbackStore = createStore(
  combineReducers({ currentFeedbackItem }),
  applyMiddleware(logger)
);
