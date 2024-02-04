import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function ReviewQuery() {
  const feedbackObj = useSelector((state) => state.currentFeedbackItem);
  const history = useHistory();
  console.log("feedbackObj", feedbackObj);

  const submitBtnClk = (event) => {
    event.preventDefault();
    console.log("In client POST - Data", feedbackObj);
    const newFeedback = {
      feeling: feedbackObj.feeling,
      understanding: feedbackObj.understanding,
      support: feedbackObj.support,
      comments: feedbackObj.comments,
    };
    axios
      .post("/api/feedback", feedbackObj)
      .then((response) => {
        console.log("Successful client POST");
      })
      .catch((err) => {
        console.err("ERROR in client POST:");
      });
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
