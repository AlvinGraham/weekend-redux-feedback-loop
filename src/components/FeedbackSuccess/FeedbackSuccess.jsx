import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function FeedbackSuccess() {
  const history = useHistory();
  const dispatch = useDispatch();

  const newFeedbackBtnClk = (event) => {
    event.preventDefault();

    dispatch({ type: "CLEAR_FEEDBACK" });
    history.push("/");
  };

  return (
    <div className="success-div">
      <h1>Feedback!</h1>
      <h1>Thank You!</h1>

      <button
        data-testid="next"
        type="button"
        onClick={newFeedbackBtnClk}>
        Leave New Feedback
      </button>
    </div>
  );
}
