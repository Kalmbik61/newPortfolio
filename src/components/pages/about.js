import { useContext, useState, useEffect } from "react";
import About_head from "../about/about-head";
import About_main from "../about/about-main";
import About_reviews from "../about/about-reviews";
import Divider from "@material-ui/core/Divider";
import ModalWrapper from "../modalCarousel/ModalWrapper";

import { connect } from "react-redux";
import { openModalSlider } from "../../actions/actions";

import Context from "../../context/contex";

//analytics
import { firebaseAnalitics } from "../../firebaseConfig";

const About = ({ openModalSlider, langReducer }) => {
  const { textRu } = useContext(Context);

  //for modal
  const [showModal, setShowModal] = useState(false);
  const modalFunc = () => {
    setShowModal((prev) => !prev);
  };
  const takeImgs = (imgs) => {
    openModalSlider(imgs);
    setShowModal((prev) => !prev);
  };

  //analytics
  useEffect(() => {
    firebaseAnalitics.logEvent("homepage_visited");
  }, []);

  return (
    <div className="container" style={{ position: "relative" }}>
      <About_head data={textRu.about.head} />
      <Divider />
      <About_main data={textRu.about.skillsBlock} />
      <Divider />
      <About_reviews
        data={textRu.about.reviewsBlock}
        imgs={textRu.portfolio.arr}
        takeImgs={takeImgs}
      />
      <Divider />
      {/* <About_howWorkDo data /> */}
      <Divider />
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
export default connect(mapStateToProps, mapDispatchToProps)(About);
