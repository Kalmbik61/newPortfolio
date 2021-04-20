import React from "react";
import Resume_main_exp from "./resume_main_exp";
import Resume_main_skills from "./resume_main_skills";
import Resume_footer from "./resume_footer";
import ResumeContacts from "./resumeContacts";
import Divider from "@material-ui/core/Divider";
import ReactHtmlParser from "react-html-parser";

import "./resume_main.css";

const Resume_main = ({ data }) => {
  const { small, title, subTitle, logo, contacts } = data.head;

  return (
    <>
      <div className="text-center text-secondary pt-3">
        {ReactHtmlParser(small)}
      </div>

      <div className="shadow-lg container mt-3 p-4">
        <div className="head m-3">
          <div className="row align-items-center ">
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-3 text-center">
              <img
                className="rounded mx-auto"
                src={logo}
                alt="..."
                style={{ maxWidth: "120px" }}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-6">
              <h3 className="display-5 font-weight-bold resume_name">
                {title}
              </h3>
              <p className="text-secondary">{subTitle}</p>
            </div>
            <div className="contacts_wrapper col-12 col-md-6 col-lg-4 col-xl-3">
              <ResumeContacts data={contacts} />
            </div>
          </div>
        </div>
        <Divider />
        <div className="resume_exp mt-3">
          <div className="row">
            <Resume_main_exp data={data.expBlock} />
            <Resume_main_skills data={data.skillsBlock} />
          </div>
        </div>
        <Divider />
        <Resume_footer />
      </div>
    </>
  );
};

export default Resume_main;
