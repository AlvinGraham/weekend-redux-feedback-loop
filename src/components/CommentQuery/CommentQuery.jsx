import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function CommentQuery() {
  const [commentState, setCommentState] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

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

  return (
    <div className="question-div">
      <h1>Any comments you want to leave?</h1>

      <label htmlFor="commentInput">Comments</label>
      <input
        type="text"
        id="commentInput"
        data-testid="input"
        value={commentState}
        onChange={commentInputChange}
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
