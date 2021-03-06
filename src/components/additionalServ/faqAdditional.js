import React from "react";
import ServiceAcordion from "../service_price/service_accordion";

const FaqAdditional = ({ data }) => {
  const { faqDescr, faqTitle } = data;
  return (
    <div className="faq text-center mt-4 mb-4" id="faq">
      <div className="faq_header">
        <h2 className="display-5"> {faqTitle} </h2>
      </div>
      <div className="faq_body text-left">
        {faqDescr.map((faq) => {
          return (
            <ServiceAcordion
              key={faq.id}
              title={faq.title}
              id={faq.id}
              answer={faq.answer}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FaqAdditional;
