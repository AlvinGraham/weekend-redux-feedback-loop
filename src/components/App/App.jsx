import React from "react";
import axios from "axios";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";

import { useEffect } from "react";
import FeelingQuery from "../FeelingQuery/FeelingQuery";
import UnderstandingQuery from "../UnderstandingQuery/UnderstandingQuery";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <Route
          path="/"
          exact>
          <FeelingQuery />
        </Route>
        <Route
          path="/understanding"
          exact>
          <UnderstandingQuery />
        </Route>
      </Router>
    </div>
  );
}

export default App;
