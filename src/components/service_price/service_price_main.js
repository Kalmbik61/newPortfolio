import React from "react";
import TablePrice from "./tablePrice";
import ReactHtmlParser from "react-html-parser";
import "./service_price_main.css";

const Service_price_main = ({ data, subTitle }) => {
  return (
    <>
      <div className="text-center price_text mb-4 mt-2">
        <small className="text-secondary">{ReactHtmlParser(subTitle)}</small>
      </div>
      <div className="table_price">
        <h3 className="display-5 text-center mb-4">
          {data.websitesTable.mainTitle}
        </h3>
        <TablePrice data={data.websitesTable.dataService} />
      </div>
      <div className="tilda mt-3">
        <h3 className="display-5 text-center mb-3"> {data.tilda.mainTitle}</h3>
        <TablePrice data={data.tilda.dataService} />
      </div>
      <div className="SMM mt-3">
        <h4 className="display-5 text-center mb-3 text-muted">
          {data.instagram.additionalServices}
        </h4>
        <h3 className="display-5 text-center mb-3">
          {data.instagram.mainTitle}
        </h3>
        <TablePrice data={data.instagram.dataService} />
      </div>
    </>
  );
};

export default Service_price_main;
