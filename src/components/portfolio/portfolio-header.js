import React from "react";
import { Button } from "react-bootstrap";
import SendIcon from "@material-ui/icons/Send";
import { Link } from "react-router-dom";

const Portfolio_header = ({ data }) => {
  const { title, subTitle, portfolioBtn } = data;
  return (
    <div className="text-center">
      <h1>{title}</h1>
      <p className="font-weight-light">{subTitle}</p>
      <Link to="/contacts">
        <Button
          className="m-4"
          style={{ backgroundColor: "#43a076", borderColor: "#43a076" }}
        >
          <SendIcon className="mr-2" />
          {portfolioBtn}
        </Button>
      </Link>
    </div>
  );
};
export default Portfolio_header;
