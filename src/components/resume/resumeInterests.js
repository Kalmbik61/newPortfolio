import React from "react";

const ResumeInterests = ({ interests }) => {
  return (
    <>
      <div className="interests_head">
        <h3 className="section-title font-weight-bold">{interests.title}</h3>
      </div>
      <div className="interests_list p-2">
        <ul className="list-unstyled ml-2">
          {interests.interests.map((data) => {
            return <li key={data.id}>{data.interes}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default ResumeInterests;
