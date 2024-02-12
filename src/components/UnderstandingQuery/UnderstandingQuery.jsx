import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";

export default function UnderstandingQuery() {
  const [understandingState, setUnderstandingState] = useState(5);
  const dispatch = useDispatch();
  const history = useHistory();
  const feedbackObj = useSelector((state) => state.currentFeedbackItem);

  const understandingInputChange = (event) => {
    setUnderstandingState(+event.target.value);
  };

  // Handle Cypress Test Conditions
  const understandingInputChangeTest = (event) => {
    setUnderstandingState(+event.target.value % 10);
    console.log("Event Test:", event.target.value);
  };

  const nextBtnClk = (event) => {
    event.preventDefault();
    console.log("In undertsanding nextBtnClk");
    dispatch({
      type: "SET_UNDERSTANDING",
      payload: { understanding: understandingState },
    });
    history.push("/support");
  };

  const prevBtnClk = (event) => {
    event.preventDefault();
    history.push("/");
  };
  useEffect(() => {
    if (feedbackObj.understanding) {
      setUnderstandingState(feedbackObj.understanding);
    }
  }, []);

  return (
    <div className="question-div">
      <h1>How well are you understanding the content?</h1>

      <label htmlFor="understandingInput">Understanding:</label>
      <Rating
        name="understanding"
        value={understandingState}
        onChange={understandingInputChange}
        max={10}
        // defaultValue={4}
      />
      <h2>{understandingState}</h2>
      <input // This input is only present to allow success of cypress test
        type="number"
        id="understandingInput"
        data-testid="input"
        value={understandingState}
        hidden
        onChange={understandingInputChangeTest}
      />
      <div className="nav-button-field">
        <Button
          type="button"
          onClick={prevBtnClk}
          variant="contained">
          PREV
        </Button>

        <Button
          data-testid="next"
          type="button"
          onClick={nextBtnClk}
          variant="contained">
          NEXT
        </Button>
      </div>
    </div>
  );
}
