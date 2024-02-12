import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import VerifiedIcon from "@mui/icons-material/Verified";

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
      <div className="success-banner">
        <VerifiedIcon
          className="success-icon"
          color="success"
          sx={{ fontSize: 70 }}
        />
        <h1>Feedback Successuly Submitted!</h1>
      </div>

      <h1>Thank You!</h1>

      <Button
        data-testid="next"
        type="button"
        onClick={newFeedbackBtnClk}
        variant="contained">
        Leave New Feedback
      </Button>
    </div>
  );
}
