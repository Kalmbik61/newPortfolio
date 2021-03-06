import React from "react";
import { Button } from "react-bootstrap";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import NoteIcon from "@material-ui/icons/Note";
import { Link } from "react-router-dom";

const Service_prise_head = ({ data }) => {
  const { title, subTitle, btns } = data;
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="descr col-md text-center">
          <h1> {title}</h1>
          <p>{subTitle}</p>
          <div className="buttons m-5 row justify-content-center">
            <div className="col-auto m-3">
              <Link to="/portfolio">
                <Button variant="outline-info ">
                  <ExitToAppIcon style={{ marginRight: "0.5rem" }} />
                  {btns.portfolioBtn}
                </Button>
              </Link>
            </div>
            <div className="col-auto m-3">
              <Link to="/">
                <Button variant="outline-success">
                  <NoteIcon style={{ marginRight: "0.5rem" }} />
                  {btns.aboutBtn}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service_prise_head;
