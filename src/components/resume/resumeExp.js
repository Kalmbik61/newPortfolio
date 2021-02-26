import React from "react";

const ResumeExp = ({ data }) => {
  const { id, title, date_from, date_to, about, work_type } = data;
  return (
    <div className="item_work" key={id}>
      <div className="row align-items-center mt-3">
        <div className="col-md-6 col-lg-8 col-xl-8">
          <h5 className="display-5">{title}</h5>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-4 pr-0">
          <span className="text-secondary">
            {work_type} | {date_from} - {date_to}
          </span>
        </div>
      </div>
      <div className="item_work_descr p-3">{about}</div>
    </div>
  );
};

export default ResumeExp;
