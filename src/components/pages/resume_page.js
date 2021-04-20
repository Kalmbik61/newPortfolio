import { useContext, useEffect } from "react";
import Resume_head from "../resume/resume_head";
import Resume_main from "../resume/resume_main";
import Divider from "@material-ui/core/Divider";

import Contex from "../../context/contex";

//analytics
import { firebaseAnalitics } from "../../firebaseConfig";

function Resume_page() {
  const { textRu } = useContext(Contex);
  useEffect(() => {
    firebaseAnalitics.logEvent("resumePage_visited");
  }, []);
  return (
    <div className="container">
      <Resume_head data={textRu.resume} />
      <Divider />
      <Resume_main data={textRu.resume.body} />
    </div>
  );
}

export default Resume_page;
