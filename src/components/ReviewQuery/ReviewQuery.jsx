import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function ReviewQuery() {
  const feedbackObj = useSelector((state) => state.currentFeedbackItem);
  const history = useHistory();
  console.log("feedbackObj", feedbackObj);

  const submitBtnClk = (event) => {
    event.preventDefault();
  };

  return (
    <div className="review-div">
      <h1>Review Your Feedback</h1>
      <p>Feelings: {feedbackObj.feeling}</p>
      <p>Understanding: {feedbackObj.understanding}</p>
      <p>Support: {feedbackObj.support}</p>
      <p>Comments: {feedbackObj.comments}</p>
      <button
        type="button"
        onClick={submitBtnClk}>
        SUBMIT
      </button>
    </div>
  );
}
