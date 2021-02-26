import React from "react";

const ResumeSkills = ({ data }) => {
  const { title, technicalSkillsBlock, softSkillsBlock } = data;
  return (
    <>
      <div className="skills">
        <div className="skills_head">
          <h3 className="section-title font-weight-bold">{title}</h3>
        </div>
        <div className="skills_tech">
          <div className="skills_list p-2">
            <h5 className="skills_title">{technicalSkillsBlock.title}</h5>
            <ul className="list-unstyled ml-2">
              {technicalSkillsBlock.technical.map((skills) => {
                const { id, skill } = skills;
                return <li key={id}> {skill}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="skills_soft">
          <div className="skills_list p-2">
            <h5 className="skills_title">{softSkillsBlock.title}</h5>
            <ul className="list-unstyled ml-2">
              {softSkillsBlock.softSkills.map((skills) => {
                const { id, skill } = skills;
                return <li key={id}> {skill}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeSkills;
