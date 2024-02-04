import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function SupportQuery() {
  const [supportState, setSupportState] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const supportInputChange = (event) => {
    setSupportState(event.target.value);
  };

  const nextBtnClk = (event) => {
    event.preventDefault();
    console.log("In undertsanding nextBtnClk");
    dispatch({
      type: "SET_UNDERSTANDING",
      payload: { support: supportState },
    });
    history.push("/comment");
  };

  return (
    <div className="question-div">
      <h1>How well are you being supported?</h1>

      <label htmlFor="supportInput">Support?</label>
      <input
        type="number"
        id="supportInput"
        data-testid="input"
        value={supportState}
        onChange={supportInputChange}
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
