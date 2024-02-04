import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function UnderstandingQuery() {
  const [understandingState, setUnderstandingState] = useState("");
  const dispatch = useDispatch();

  const understandingInputChange = (event) => {
    setUnderstandingState(event.target.value);
  };

  const nextBtnClk = (event) => {
    event.preventDefault();
    console.log("In undertsanding nextBtnClk");
    dispatch({
      type: "SET_UNDERSTANDING",
      payload: { understanding: understandingState },
    });
  };

  return (
    <div className="question-div">
      <h1>How well are you undertsanding the content?</h1>

      <label htmlFor="understandingInput">Understanding?</label>
      <input
        type="number"
        id="understandingInput"
        data-testid="input"
        value={understandingState}
        onChange={understandingInputChange}
      />
      <button
        data-testid="next"
        type="button"
        onClick={nextBtnClk}>
        NEXT
      </button>
    </div>
  );
}
