import React from "react";
import { Button } from "react-bootstrap";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";

import "./about-main.css";
import AboutSkills from "./aboutSkills";

const About_main = ({ data }) => {
  const { title, subTitle, skills, serviceBtn } = data;
  return (
    <div>
      <div className="mb-5">
        <h3 className="section-title font-weight-bold m-3">{title}</h3>
        <p>{subTitle}</p>
      </div>
      <div className="skills">
        <div className="row justify-content-between">
          {skills.map((skill) => {
            return <AboutSkills key={skill.id} data={skill} />;
          })}
        </div>
      </div>
      <div className="text-center m-5">
        <Link to="/service">
          <Button variant="outline-success">
            <ExitToAppIcon style={{ marginRight: "0.5rem" }} />
            {serviceBtn}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default About_main;
