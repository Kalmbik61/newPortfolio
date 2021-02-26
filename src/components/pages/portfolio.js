import React, { useContext } from "react";
import Portfolio_header from "../portfolio/portfolio-header";
import Portfolio_main from "../portfolio/portfolio-main";
import Divider from "@material-ui/core/Divider";

import Context from "../../context/contex";

const Portfolio = () => {
  const { textRu } = useContext(Context);

  return (
    <div>
      <Portfolio_header data={textRu.portfolio.head} />
      <Divider />
      <Portfolio_main data={textRu.portfolio.arr} />
    </div>
  );
};
export default Portfolio;
