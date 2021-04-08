import { useContext, useEffect } from "react";
import Divider from "@material-ui/core/Divider";
import Service_price_head from "../service_price/service_price_head";
import Service_price_main from "../service_price/service_price_main";
import Service_faq from "../service_price/service_faq";

import Context from "../../context/contex";

//analytics
import { firebaseAnalitics } from "../../firebaseConfig";

const Service_page = () => {
  const { textRu } = useContext(Context);

  useEffect(() => {
    firebaseAnalitics.logEvent("servicesPage_visited");
  }, []);
  return (
    <div className="container">
      <Service_price_head data={textRu.serviceAndPrice.head} />
      <Divider />
      <Service_price_main
        data={textRu.serviceAndPrice.body.data}
        subTitle={textRu.serviceAndPrice.body.subTitle}
      />
      <Service_faq data={textRu.serviceAndPrice.faqBlock} />
    </div>
  );
};

export default Service_page;
