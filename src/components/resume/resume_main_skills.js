import React from "react";
import ResumeInterests from "./resumeInterests";
import ResumeSkills from "./resumeSkills";
import ReactHtmlParser from "react-html-parser";

const Resume_main_skills = ({ data }) => {
  return (
    <div className="col-md-6 col-lg-4 col-xl-4 col-12 resume_side">
      <ResumeSkills data={data} />
      <div className="lang">
        <div className="lang_head">
          <h3 className="section-title font-weight-bold">
            {data.langsBlock.title}
          </h3>
        </div>
        <div className="skills_list p-2">
          <ul className="list-unstyled ml-2">
            {data.langsBlock.langs.map((item) => {
              return <li key={item.id}>{ReactHtmlParser(item.lang)}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="interests">
        <ResumeInterests interests={data.interestsBlock} />
      </div>
    </div>
  );
};

export default Resume_main_skills;
