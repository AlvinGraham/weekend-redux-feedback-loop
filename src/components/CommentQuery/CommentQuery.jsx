import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function CommentQuery() {
  const [commentState, setCommentState] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const feedbackObj = useSelector((state) => state.currentFeedbackItem);

  const inputProps = { "data-testid": "input" };

  const commentInputChange = (event) => {
    setCommentState(event.target.value);
  };

  const nextBtnClk = (event) => {
    event.preventDefault();
    console.log("In undertsanding nextBtnClk");
    dispatch({
      type: "SET_COMMENT",
      payload: { comment: commentState },
    });
    history.push("/review");
  };

  const prevBtnClk = (event) => {
    event.preventDefault();
    history.push("/support");
  };

  useEffect(() => {
    if (feedbackObj.comments) {
      setCommentState(feedbackObj.comments);
    }
  }, []);

  return (
    <div className="question-div">
      <h1>Any comments you want to leave?</h1>

      <label htmlFor="commentInput">Comments</label>
      <TextField
        inputProps={inputProps}
        value={commentState}
        onChange={commentInputChange}
        variant="standard"
        id="commentInput"
        multiline
        rows={2}
        placeholder={"Enter Comments Here..."}
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
