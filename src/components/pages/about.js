import React, { useContext } from "react";
import About_head from "../about/about-head";
import About_main from "../about/about-main";
import About_reviews from "../about/about-reviews";
import About_howWorkDo from "../about/about-howWorkDo";
import Divider from "@material-ui/core/Divider";

import Context from "../../context/contex";

const About = () => {
  const { textRu } = useContext(Context);

  return (
    <div className="container">
      <About_head data={textRu.about.head} />
      <Divider />
      <About_main data={textRu.about.skillsBlock} />
      <Divider />
      <About_reviews
        data={textRu.about.reviewsBlock}
        imgs={textRu.portfolio.arr}
      />
      <Divider />
      <About_howWorkDo data />
      <Divider />
    </div>
  );
};
export default About;
