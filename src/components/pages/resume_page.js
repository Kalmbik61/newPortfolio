import React, { useContext } from "react";
import Resume_head from "../resume/resume_head";
import Resume_main from "../resume/resume_main";
import Divider from "@material-ui/core/Divider";

import Contex from "../../context/contex";

function Resume_page() {
  const { textRu } = useContext(Contex);

  return (
    <div className="container">
      <Resume_head data={textRu.resume.head.title} />
      <Divider />
      <Resume_main data={textRu.resume.body} />
    </div>
  );
}

export default Resume_page;
