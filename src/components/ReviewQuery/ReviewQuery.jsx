import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";

export default function ReviewQuery() {
  const feedbackObj = useSelector((state) => state.currentFeedbackItem);
  const history = useHistory();
  // console.log("feedbackObj", feedbackObj);

  const submitBtnClk = (event) => {
    event.preventDefault();
    console.log("In client POST - Data", feedbackObj);

    axios
      .post("/api/feedback", feedbackObj)
      .then((response) => {
        console.log("Successful client POST");
        history.push("/success");
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
      <Button
        type="button"
        onClick={submitBtnClk}
        data-testid="next"
        variant="contained">
        SUBMIT
      </Button>
    </div>
  );
}
