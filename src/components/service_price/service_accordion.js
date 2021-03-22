import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AccordionSummary,
  AccordionDetails,
  Typography,
  Accordion,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ReactHtmlParser from "react-html-parser";

import "./service_price_main.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: 10,
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightBold,
  },
}));

export default function ServiceAccordion({ title, answer, id }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${id}-content`}
          id={`${id}-header`}
        >
          <Typography className={classes.heading}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{ReactHtmlParser(answer)}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
