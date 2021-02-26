import React from "react";
import { Button } from "react-bootstrap";
import GetAppIcon from "@material-ui/icons/GetApp";
const Resume_head = ({ data }) => {
  return (
    <div className="container">
      <div className="text-center">
        <h1>{data}</h1>
        {/* <Button
          className="m-4"
          style={{ backgroundColor: "#43a076", borderColor: "#43a076" }}
        >
          <GetAppIcon className="mr-2" />
          Скачать PDF
        </Button> */}
      </div>
    </div>
  );
};

export default Resume_head;
