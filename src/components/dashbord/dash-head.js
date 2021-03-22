import React, { useContext } from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";

import Context from "../../context/contex";

import "./dash-head.css";

const Dash_head = () => {
  const { textRu } = useContext(Context);

  return (
    <>
      <div className="text-center">
        <img
          src={
            localStorage.getItem("theme") === "light"
              ? textRu.dashbord.head.logoLight
              : textRu.dashbord.head.logoDark
          }
          alt="logo"
          style={{ margin: 0, width: 100 }}
        />
        <p className="m-3">{textRu.dashbord.head.subTitle}</p>
      </div>
      <div className="d-flex justify-content-center src-icons">
        <div className="git m-2">
          <a href={textRu.dashbord.head.links.git}>
            <GitHubIcon />
          </a>
        </div>
        <div className="instagram m-2">
          <a href={textRu.dashbord.head.links.inst}>
            <InstagramIcon />
          </a>
        </div>
      </div>
    </>
  );
};
export default Dash_head;
