import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function FeelingQuery() {
  const [feelingState, setFeelingState] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const feelingInputChange = (event) => {
    setFeelingState(event.target.value);
  };

  const nextBtnClk = (event) => {
    event.preventDefault();

    console.log("In feeling nectBtnClk");
    dispatch({ type: "SET_FEELING", payload: { feeling: feelingState } });
    history.push("/understanding");
  };

  return (
    <div className="question-div">
      <h1>How are you feeling today?</h1>

      <label htmlFor="feelingInput">Feeling?</label>
      <input
        type="number"
        id="feelingInput"
        data-testid="input"
        value={feelingState}
        onChange={feelingInputChange}
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
