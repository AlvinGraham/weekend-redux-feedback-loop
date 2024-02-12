import { useHistory } from "react-router-dom/";
import { useDispatch } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();
  const history = useHistory();

  const newReviewClk = () => {
    dispatch({ type: "CLEAR_FEEDBACK" });
    history.push("/");
  };

  const adminClk = () => {
    history.push("/admin");
  };

  return (
    <header className="App-header">
      <h1 className="App-title">Feedback!</h1>
      <h4>Don't forget it!</h4>
      <div className="nav">
        <ul>
          <li onClick={newReviewClk}>New Review</li>
          <li onClick={adminClk}>Admin</li>
        </ul>
      </div>
    </header>
  );
}
