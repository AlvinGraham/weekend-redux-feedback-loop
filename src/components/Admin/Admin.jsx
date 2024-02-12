import VerifiedIcon from "@mui/icons-material/Verified";
import { useEffect, useState } from "react";
import axios from "axios";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";
import { pink } from "@mui/material/colors";

export default function Admin() {
  const [reviewList, setReviewList] = useState([]);

  const fetchReviews = () => {
    console.log("Fetching Reviews");
    axios
      .get("/api/feedback/reviews")
      .then((response) => {
        setReviewList(response.data);
        console.log("Retrieved reviews:", response.data);
      })
      .catch((err) => {
        console.error("ERROR in client GET:", err);
      });
  };

  const deleteBtnClk = (event, id) => {
    console.log("Delete Event Data:", id);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div className="admin-div">
      <div className="admin-banner">
        <VerifiedIcon
          className="admin-icon"
          color="success"
          sx={{ fontSize: 70 }}
        />
        <h1>Feedback Successuly Submitted!</h1>
      </div>

      <h1>Table Goes Here</h1>
      {/* <p>{reviewList}</p> */}
      <table>
        <thead>
          <tr>
            <th>Feeling</th>
            <th>Understanding</th>
            <th>Support</th>
            <th>Comments</th>
            <th>Delete</th>
            <th>Flagged</th>
          </tr>
        </thead>
        <tbody>
          {reviewList.map((review, index) => {
            return (
              <tr
                key={review.id}
                value={review.id}>
                <td>{review.feeling}</td>
                <td>{review.understanding}</td>
                <td>{review.support}</td>
                <td>{review.comments}</td>
                <td>
                  <DeleteForeverIcon
                    className="clickable"
                    onClick={() => {
                      deleteBtnClk(event, review.id);
                    }}
                  />
                </td>
                <td>
                  {review.flagged ? (
                    <div className="flag-cell">
                      <span>Yes</span>
                      <FlagCircleIcon
                        className="clickable"
                        fontSize="small"
                        sx={{ color: pink[500] }}
                      />
                    </div>
                  ) : (
                    <div className="flag-cell">
                      <span>No</span>
                      <FlagCircleIcon
                        className="clickable"
                        fontSize="small"
                        color="success"
                      />
                    </div>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
