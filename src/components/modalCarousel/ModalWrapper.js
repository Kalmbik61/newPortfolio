import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import CloseIcon from "@material-ui/icons/Close";
import AboutCarousel from "../about/aboutCarousel";

import "./modalCarousel.css";
const ModalWrapper = ({ show, handleClose, imgs }) => {
  function getModalStyle() {
    const top = 50;
    const left = 50;
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: "absolute",
      width:
        window.screen.width >= 1024
          ? 1000
          : window.screen.width >= 768
          ? 750
          : window.screen.width >= 425
          ? 400
          : window.screen.width >= 375
          ? 350
          : 350,
      // height:
      //   window.screen.width >= 1024
      //     ? 700
      //     : window.screen.width >= 768
      //     ? 350
      //     : window.screen.width >= 425
      //     ? 200
      //     : window.screen.width >= 375
      //     ? 180
      //     : 180,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  return (
    <Modal open={show} onClose={handleClose}>
      <div style={modalStyle} className={classes.paper}>
        <CloseIcon
          className="close_btn"
          onClick={handleClose}
          style={{ cursor: "pointer" }}
        />
        <AboutCarousel imgs={imgs} />
      </div>
    </Modal>
  );
};

export default ModalWrapper;
