import React from "react";
import { Button } from "react-bootstrap";
import GetAppIcon from "@material-ui/icons/GetApp";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDF from "./PDF";
const Resume_head = ({ data }) => {
  const { title, subTitle, logo, contacts } = data.body.head;

  return (
    <div className="container">
      <div className="text-center">
        <h1>{data.head.title}</h1>
        <PDFDownloadLink
          document={
            <PDF
              data={data.body}
              title={title}
              subTitle={subTitle}
              logo={logo}
              contacts={contacts}
            />
          }
          fileName="Evgeniy_Resume.pdf"
        >
          <Button
            className="m-4"
            style={{ backgroundColor: "#43a076", borderColor: "#43a076" }}
          >
            <GetAppIcon className="mr-2" />
            Download PDF
          </Button>
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default Resume_head;
