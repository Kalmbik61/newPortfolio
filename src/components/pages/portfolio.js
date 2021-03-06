import React, { useContext, useState } from "react";
import Portfolio_header from "../portfolio/portfolio-header";
import Portfolio_main from "../portfolio/portfolio-main";
import Divider from "@material-ui/core/Divider";
import ModalWrapper from "../modalCarousel/ModalWrapper";

import Context from "../../context/contex";

import { connect } from "react-redux";
import { openModalSlider } from "../../actions/actions";

const Portfolio = ({ openModalSlider, langReducer }) => {
  const { textRu } = useContext(Context);

  const [showModal, setShowModal] = useState(false);
  const modalFunc = () => {
    setShowModal((prev) => !prev);
  };
  const takeImgs = (imgs) => {
    openModalSlider(imgs);
    setShowModal((prev) => !prev);
  };
  return (
    <div>
      <Portfolio_header data={textRu.portfolio.head} />
      <Divider />
      <Portfolio_main data={textRu.portfolio.arr} takeImgs={takeImgs} />
      <ModalWrapper
        show={showModal}
        handleClose={modalFunc}
        imgs={langReducer.modalSliderImgs}
      />
    </div>
  );
};
const mapStateToProps = ({ langReducer }) => {
  return { langReducer };
};
const mapDispatchToProps = { openModalSlider };
export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
