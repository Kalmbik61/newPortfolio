import React from "react";
import TablePrice from "../service_price/tablePrice";
const AdditionalServ = ({ data }) => {
  return (
    <div className="container">
      <div className="SMM mt-3">
        <h4 className="display-5 text-center mb-3 text-muted">
          {data.additionalBlock.additionalServices}
        </h4>
        <h3 className="display-5 text-center mb-3">
          {data.additionalBlock.mainTitle}
        </h3>
        <TablePrice data={data.additionalBlock.dataService} />
      </div>
    </div>
  );
};

export default AdditionalServ;
