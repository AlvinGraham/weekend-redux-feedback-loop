const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// TODO: This route adds a new feedback entry
router.post("/", (req, res) => {
  console.log("Posting req.body or req.data:", req.body);
  const newFeedback = req.body;

  // assemble queryText abd queryArgs
  const queryText = `INSERT INTO "feedback" (feeling, understanding, support, comments) 
											VALUES ($1, $2, $3, $4);`;
  const queryArgs = [
    newFeedback.feeling,
    newFeedback.understanding,
    newFeedback.support,
    newFeedback.comments,
  ];

  pool
    .query(queryText, queryArgs)
    .then((result) => {
      console.log("Succsessful POST DB Query");
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log("ERROR in POST DB Query:", err);
      res.sendStatus(500);
    });
});

router.get("/reviews", (req, res) => {
  console.log("testing");
  const sqlText = `SELECT * FROM "feedback" ORDER BY "id" DESC`;
  pool
    .query(sqlText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

// DO NOT EDIT THIS ROUTE
// This route must return all feedback.
router.get("/", (req, res) => {
  console.log("testing");
  const sqlText = `SELECT * FROM "feedback" ORDER BY "id"`;
  pool
    .query(sqlText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
