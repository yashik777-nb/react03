import React from "react";
import "./App.css";
import AllIssuesTracker from "../containers/IssuesContainer/AllIssuesTracker";
import { BrowserRouter } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <AllIssuesTracker />
        </BrowserRouter>
      </div>
    );
  }
}
