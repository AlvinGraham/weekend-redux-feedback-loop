import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";

export default function FeelingQuery() {
  const [feelingState, setFeelingState] = useState(5);
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

      <label htmlFor="feelingInput">Feeling:</label>
      <Rating
        name="feeling"
        value={feelingState}
        onChange={feelingInputChange}
        defaultValue={5}
        max={10}
      />
      <h2>{feelingState}</h2>
      {/* //<input
      //   type="number"
      //   id="feelingInput"
      //   data-testid="input"
      //   value={feelingState}
      //   onChange={feelingInputChange}
      // /> */}
      <Button
        data-testid="next"
        type="button"
        onClick={nextBtnClk}
        variant="contained">
        NEXT
      </Button>
      {/* <button
        data-testid="next"
        type="button"
        onClick={nextBtnClk}>
        NEXT
      </button> */}
    </div>
  );
}
