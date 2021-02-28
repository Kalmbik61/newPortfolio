import React, { useEffect, useState } from "react";
import PortfolioCard from "./portfolio-card";

import "./portfolio-card.css";

const Portfolio_main = ({ data }) => {
  const [portfolio, setPortfolio] = useState([]);
  useEffect(() => {
    // сохраняем иммутабельность
    const reviews = data.slice(0);
    const reverse = reviews.reverse();
    setPortfolio(reverse);
  }, []);
  return (
    <div className="container mt-5">
      {portfolio.map((item) => {
        const { id, imgs, text, title, link } = item;
        return (
          <PortfolioCard
            key={id * Math.random() * 100}
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
