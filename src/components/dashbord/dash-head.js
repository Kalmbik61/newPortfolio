import React, { useContext } from "react";
import { Avatar } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";

import Context from "../../context/contex";

import "./dash-head.css";

const Dash_head = () => {
  const { textRu } = useContext(Context);
  return (
    <>
      <div className="text-center">
        <h2 className="display-6">EvDev</h2>
        <Avatar />
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
