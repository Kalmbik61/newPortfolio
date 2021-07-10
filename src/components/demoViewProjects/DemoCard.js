import React from "react";
import { Button } from "react-bootstrap";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./demoCard.css";
const DemoCard = ({ title, descr, name, img }) => {
  return (
    <div className="container shadow text-center p-2">
      <div className="card_head_wrapper">
        <h4>{title}</h4>
      </div>
      <div className="card_content_wrapper">
        <p>{descr}</p>
      </div>
      <div className="card_img_wrapper">
        <LazyLoadImage effect="blur" src={img} alt={name} />
        {/* <img src={img} alt={name} /> */}
      </div>
      <div className="card_btn_wrapper mt-3 mb-3">
        <Link to={`/${name}`}>
          <Button variant="outline-success">
            <VisibilityIcon style={{ marginRight: "0.5rem" }} />
            View Live demo
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DemoCard;
