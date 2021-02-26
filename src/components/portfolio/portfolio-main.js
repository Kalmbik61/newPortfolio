import React from "react";
import PortfolioCard from "./portfolio-card";

import "./portfolio-card.css";

const Portfolio_main = ({ data }) => {
  return (
    <div className="container mt-5">
      {data.map((item) => {
        const { id, imgs, text, title, link } = item;
        return (
          <PortfolioCard
            key={id * Math.random()}
            imgs={imgs}
            text={text}
            title={title}
            link={link}
            id={id}
          />
        );
      })}
    </div>
  );
};

export default Portfolio_main;
