import React from "react";
import { Button } from "react-bootstrap";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import NoteIcon from "@material-ui/icons/Note";
import { Link } from "react-router-dom";

const About_head = ({ data }) => {
  const { title, subTitle, text, btns, logo } = data;
  return (
    <div className="container mb-4">
      <div className="row justify-content-center">
        <div className="descr col-md align-self-center">
          <h1>{title}</h1>
          <h5 className="mt-1 mb-5 display-5"> {subTitle}</h5>
          <p>{text}</p>
          <div className="buttons mt-2 d-flex">
            <Link to="/portfolio">
              <Button variant="outline-info mr-3">
                <ExitToAppIcon style={{ marginRight: "0.5rem" }} />
                {btns.portfolioBtn}
              </Button>
            </Link>
            <Link to="/resume">
              <Button variant="outline-success">
                <NoteIcon style={{ marginRight: "0.5rem" }} />
                {btns.resumeBtn}
              </Button>
            </Link>
          </div>
        </div>
        <div className="image col-md text-center p-3">
          <img src={logo} alt="logo" style={{ width: 200, height: 300 }} />
        </div>
      </div>
    </div>
  );
};
export default About_head;
