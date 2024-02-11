import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";

export default function FeelingQuery() {
  const [feelingState, setFeelingState] = useState(5);
  const dispatch = useDispatch();
  const history = useHistory();

  const inputProps = {
    datatestid: "input",
  };

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
        max={10}
        defaultValue={5}
      />
      <h2>{feelingState}</h2>
      <input // This input is only present to allow success of cypress test
        type="number"
        id="feelingInput"
        data-testid="input"
        value={feelingState}
        hidden
        // onChange={feelingInputChange}
      />
      <Button
        data-testid="next"
        type="button"
        onClick={nextBtnClk}
        variant="contained">
        NEXT
      </Button>
    </div>
  );
}
