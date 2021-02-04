import React from "react";
import Issue from "../../components/Issue/Issue";
import IssuesListCSS from "./IssuesList.module.css";
import axios from "axios";

export default class IssuesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: [],
    };
  }
  render() {
    let issuesList = this.state.issues.map((issue) => (
      <Issue
        key={issue.id}
        id={issue.id}
        issueDescription={issue.issueDescription}
        severity={issue.severity}
        status={issue.status}
      />
    ));

    return (
      <div>
        <h1 className={IssuesListCSS.issuesListHeader}>Issues List</h1>
        <table className={IssuesListCSS.border}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Issue Description</th>
              <th>Severity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>{issuesList}</tbody>
        </table>
      </div>
    );
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/issues")
      .then((response) => {
        this.setState({
          issues: response.data,
        });
      })
      .catch((error) => console.log(error));
  }
}
