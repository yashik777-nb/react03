import React from "react";
import { Route, Link } from "react-router-dom";
import About from "../AboutContainer/About";
import AllIssues from "../IssuesList/IssuesList";
import AllIssuestrackerCSS from "./AllIssuesTracker.module.css";

export default class AllIssuesPage extends React.Component {
  render() {
    return (
      <div className={AllIssuestrackerCSS.AllIssues}>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/issues">Issues</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact component={About} />
        <Route path="/issues" exact component={AllIssues} />
      </div>
    );
  }
}
