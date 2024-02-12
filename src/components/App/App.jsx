import React from "react";
import axios from "axios";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";

import { useEffect } from "react";
import FeelingQuery from "../FeelingQuery/FeelingQuery";
import UnderstandingQuery from "../UnderstandingQuery/UnderstandingQuery";
import SupportQuery from "../SupportQuery/SupportQuery";
import CommentQuery from "../CommentQuery/CommentQuery";
import ReviewQuery from "../ReviewQuery/ReviewQuery";
import FeedbackSuccess from "../FeedbackSuccess/FeedbackSuccess";
import Admin from "../Admin/Admin";
import Header from "./Header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route
          path="/"
          exact>
          <FeelingQuery />
        </Route>
        <Route path="/understanding">
          <UnderstandingQuery />
        </Route>
        <Route path="/support">
          <SupportQuery />
        </Route>
        <Route path="/comment">
          <CommentQuery />
        </Route>
        <Route path="/review">
          <ReviewQuery />
        </Route>
        <Route path="/success">
          <FeedbackSuccess />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </Router>
    </div>
  );
}

export default App;
