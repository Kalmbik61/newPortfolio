import React from "react";
import Carusel from "../portfolio/carusel";

export default function AboutReviewCard({ data, takeImgs }) {
  const { imgs, title } = data;

  return (
    <div
      className="card_wrapper m-3 col-lg-5 col-md-12 col-sm-12 col-12"
      style={{ height: 350 }}
    >
      <h3 className="descr_title">{title}</h3>
      <div className="card_img" onClick={() => takeImgs(imgs)}>
        <Carusel imgs={imgs} />
      </div>
    </div>
  );
}
