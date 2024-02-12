import VerifiedIcon from "@mui/icons-material/Verified";
import { useEffect, useState } from "react";
import axios from "axios";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";
import { pink } from "@mui/material/colors";
import Swal from "sweetalert2";

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

  const deleteBtnClk = (event, id, comment) => {
    let commentShard;
    if (comment.length > 5) {
      commentShard = comment.slice(0, 4);
    } else {
      commentShard = comment;
    }

    console.log("Delete Event Data:", id, commentShard);

    Swal.fire({
      title: `Deleting review starting with "${commentShard}"`,
      text: `Are you sure you want to delete comment "${commentShard}"? It will be gone forever!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "red",
      confirmButtonText: "DELETE",
      cancelButtonColor: "green",
      cancelButtonText: "CANCEL",
      focusCancel: true,
    }).then((confirmDelete) => {
      console.log("Confirm Delete:", confirmDelete);
      if (confirmDelete.isConfirmed === true) {
        Swal.fire({
          text: `Deleting review "${commentShard}"!`,
          icon: "success",
        });
        axios
          .delete(`/api/feedback/delete/${id}`)
          .then((response) => {
            fetchReviews();
          })
          .catch((err) => {
            console.error("ERROR in client DELETE:", err);
          });
      } else {
        Swal.fire(`Review "${commentShard}" is saved from deletion`);
      }
    });
  };

  const flagBtnClk = (event, id) => {
    console.log("Toggle flagged status:", id);
    axios
      .put(`/api/feedback/flag/${id}`)
      .then((response) => {
        fetchReviews();
      })
      .catch((err) => {
        console.error("ERROR in client PUT:", err);
      });
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
        <h1>ADMIN: Feedback Results</h1>
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
                      deleteBtnClk(event, review.id, review.comments);
                    }}
                  />
                </td>
                <td>
                  {review.flagged ? (
                    <div className="flag-cell">
                      <span>Yes</span>
                      <FlagCircleIcon
                        onClick={() => {
                          flagBtnClk(event, review.id);
                        }}
                        className="clickable"
                        fontSize="small"
                        sx={{ color: pink[500] }}
                      />
                    </div>
                  ) : (
                    <div className="flag-cell">
                      <span>No</span>
                      <FlagCircleIcon
                        onClick={() => {
                          flagBtnClk(event, review.id);
                        }}
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
