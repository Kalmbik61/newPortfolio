import React from "react";

export default function AboutReviewCard({ title, img }) {
  return (
    <div className="card_wrapper m-3 col-lg-5 col-md-12 col-sm-12 col-12">
      <h3 className="descr_title">{title}</h3>
      <div className="card_img">
        <img src={img} alt="..." />
      </div>
    </div>
  );
}
