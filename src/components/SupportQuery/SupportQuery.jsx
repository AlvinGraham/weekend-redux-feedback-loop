import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";

export default function SupportQuery() {
  const [supportState, setSupportState] = useState(5);
  const dispatch = useDispatch();
  const history = useHistory();
  const feedbackObj = useSelector((state) => state.currentFeedbackItem);

  const supportInputChange = (event) => {
    setSupportState(+event.target.value);
  };

  // Handle Cypress Test Conditions
  const supportInputChangeTest = (event) => {
    setSupportState(+event.target.value % 10);
    console.log("Event Test:", event.target.value);
  };

  const nextBtnClk = (event) => {
    event.preventDefault();
    console.log("In undertsanding nextBtnClk");
    dispatch({
      type: "SET_SUPPORT",
      payload: { support: supportState },
    });
    history.push("/comment");
  };
  const prevBtnClk = (event) => {
    event.preventDefault();
    history.push("/understanding");
  };

  useEffect(() => {
    if (feedbackObj.support) {
      setSupportState(feedbackObj.support);
    }
  }, []);

  return (
    <div className="question-div">
      <h1>How well are you being supported?</h1>

      <label htmlFor="supportInput">Support:</label>
      <Rating
        name="support"
        value={supportState}
        onChange={supportInputChange}
        max={10}
        // defaultValue={4}
      />
      <h2>{supportState}</h2>
      <input // This input is only present to allow success of cypress test
        type="number"
        id="supportInput"
        data-testid="input"
        value={supportState}
        hidden
        onChange={supportInputChangeTest}
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
