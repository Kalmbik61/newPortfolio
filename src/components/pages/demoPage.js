import { useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import NoteIcon from "@material-ui/icons/Note";
import { Link } from "react-router-dom";
import DemoCard from "../demoViewProjects/DemoCard";

import Contex from "../../context/contex";

//analytics
import { firebaseAnalitics } from "../../firebaseConfig";

const DemoPage = () => {
  useEffect(() => {
    firebaseAnalitics.logEvent("additionalServices_vicited");
  }, []);
  const { demoPage } = useContext(Contex);
  return (
    <div>
      <div className="demo_header text-center mb-5">
        <h3>
          В данном разделе представлены Демо-страницы, с функционалом которых Вы
          можете ознакомиться.
        </h3>
        <div className="buttons mt-5 d-flex justify-content-center">
          <Link to="/portfolio">
            <Button variant="outline-info mr-3">
              <ExitToAppIcon style={{ marginRight: "0.5rem" }} />
              Portfolio
              {/* {btns.portfolioBtn} */}
            </Button>
          </Link>
          <Link to="/resume">
            <Button variant="outline-success">
              <NoteIcon style={{ marginRight: "0.5rem" }} />
              {/* {btns.resumeBtn} */}
              Resume
            </Button>
          </Link>
        </div>
      </div>

      <div className="demo_content_wrapper row justify-content-around">
        {demoPage.map(({ title, id, descr, name, img }) => {
          return (
            <DemoCard
              title={title}
              descr={descr}
              name={name}
              img={img}
              key={id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DemoPage;
