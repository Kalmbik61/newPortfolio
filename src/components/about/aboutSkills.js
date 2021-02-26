import React from "react";

const AboutSkills = ({ data }) => {
  const { title, text, faIcon, iconStyle, img } = data;
  return (
    <div className="col-md-6 col-12 col-lg-4">
      <span>
        {!img ? (
          <i className={`fab ${faIcon}`} style={iconStyle} />
        ) : (
          <img src={img} style={iconStyle} alt="..." />
        )}
      </span>
      <h5>{title}</h5>
      <p>{text}</p>
    </div>
  );
};

export default AboutSkills;
