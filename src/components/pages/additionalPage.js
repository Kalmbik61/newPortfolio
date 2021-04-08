import { useContext, useEffect } from "react";
import AdditionalServ from "../additionalServ/additionalServ";
import FaqAdditional from "../additionalServ/faqAdditional";
import Context from "../../context/contex";

//analytics
import { firebaseAnalitics } from "../../firebaseConfig";

const AdditionalPage = () => {
  //analytics
  useEffect(() => {
    firebaseAnalitics.logEvent("additionalServices_visited");
  }, []);
  const { textRu } = useContext(Context);
  return (
    <>
      <AdditionalServ data={textRu.serviceAndPrice.body.data} />
      <FaqAdditional data={textRu.serviceAndPrice.body.data.additionalBlock} />
    </>
  );
};

export default AdditionalPage;
