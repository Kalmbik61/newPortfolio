import React, { Component } from "react";
import GitHubIcon from "@material-ui/icons/GitHub";

import "./resume_footer.css";
export default class Resume_footer extends Component {
  render() {
    return (
      <div className="container text-center p-2">
        <div className="footer_icons">
          <a href="https://github.com/Kalmbik61">
            <GitHubIcon />
            <span className="d-none d-lg-inline-block text-muted ml-3">
              https://github.com/Kalmbik61
            </span>
          </a>
        </div>
      </div>
    );
  }
}
