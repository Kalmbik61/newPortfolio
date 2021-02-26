import React from "react";
import CarouselComponent from "./carusel";

export default function PortfolioCard({ imgs, title, text, link, id }) {
  return (
    <div className="card_wrapper m-3">
      <div className="card_content row justify-content-between">
        <div className="card_carousel col-lg-6 col-md-12 col-sm-12  col-12">
          <CarouselComponent imgs={imgs} />
        </div>
        <div className="card_descr col-lg-6 col-md-12 col-sm-12 col-12 p-4">
          <h3 className="descr_title">{title}</h3>
          <ul className="card-text">
            {text.map((text) => {
              return <li key={id + Math.random() * 100}>{text}</li>;
            })}
          </ul>
          <p className="card-text">
            <small className="text-muted"> Website: </small>
            <small className="text-muted">
              <a href={link}>{link}</a>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}
