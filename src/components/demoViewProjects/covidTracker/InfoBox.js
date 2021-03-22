import React from "react";
import { Card, Typography, CardContent } from "@material-ui/core";

const InfoBox = ({
  title,
  cases,
  total,
  printStat,
  active,
  casesType,
  ...props
}) => {
  return (
    <Card
      className={`infoBox ${active && "infoBox--selected"}`}
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
    >
      <CardContent>
        <Typography className="infoBox_title" color="textSecondary">
          {title}
        </Typography>
        <h3
          className={`infoBox_cases ${
            casesType === "recovered" && "infoBox_cases--green"
          }`}
        >
          {printStat(cases)}
        </h3>
        <Typography className="infoBox_total" color="textSecondary">
          {printStat(total)} Total
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoBox;
