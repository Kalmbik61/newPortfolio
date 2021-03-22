import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Link } from "react-router-dom";
import AboutReviewCard from "./about-review-card";

import "./about-reviews.css";

const About_rewiews = ({ data, imgs, close, modal, takeImgs }) => {
  const { title, portfolioBtn } = data;
  const [shortReviews, setShortReviews] = useState([]);

  useEffect(() => {
    // сохраняем иммутабельность
    const reviews = imgs.slice(0);
    const reverse = reviews.reverse();
    const short = reverse.slice(0, 4);
    setShortReviews(short);
  }, [imgs]);
  return (
    <>
      <div className="mb-5">
        <h3 className="section-title font-weight-bold m-3">{title}</h3>
      </div>
      <div className="reviews_wrapper row justify-content-around">
        {shortReviews.map((rev) => {
          return (
            <AboutReviewCard key={rev.id} data={rev} takeImgs={takeImgs} />
          );
        })}
      </div>
      <div className="btn_portfolio text-center">
        <Link to="/portfolio" className="green_link">
          <Button variant="outline-success">
            <VisibilityIcon style={{ marginRight: "0.5rem" }} />
            {portfolioBtn}
          </Button>
        </Link>
      </div>
    </>
  );
};
export default About_rewiews;
