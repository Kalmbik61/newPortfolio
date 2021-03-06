import React, { useContext } from "react";
import AdditionalServ from "../additionalServ/additionalServ";
import FaqAdditional from "../additionalServ/faqAdditional";
import Context from "../../context/contex";

const AdditionalPage = () => {
  const { textRu } = useContext(Context);
  return (
    <>
      <AdditionalServ data={textRu.serviceAndPrice.body.data} />
      <FaqAdditional data={textRu.serviceAndPrice.body.data.additionalBlock} />
    </>
  );
};

export default AdditionalPage;
