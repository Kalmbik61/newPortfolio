import React from "react";
import ResumeExp from "./resumeExp";

const Resume_main_exp = ({ data }) => {
  return (
    <div className="col-md-6 col-lg-8 col-xl-8 col-12 exp">
      <h3 className="section-title font-weight-bold pl-5">{data.title}</h3>
      {data.exp.map((work) => {
        return <ResumeExp key={work.id} data={work} />;
      })}
    </div>
  );
};

export default Resume_main_exp;
