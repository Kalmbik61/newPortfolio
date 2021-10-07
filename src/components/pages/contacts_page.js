import { useContext, useEffect } from "react";
import Divider from "@material-ui/core/Divider";
import Contacts_head from "../contacts/contacts-head";
import Contacts_main from "../contacts/contacts-main";
import Contex from "../../context/contex";

//analytics
import { firebaseAnalitics } from "../../firebaseConfig";
const Contacts_page = () => {
  const { textRu } = useContext(Contex);
  //analytics
  useEffect(() => {
    firebaseAnalitics.logEvent("contactsPage_visited");
  }, []);
  return (
    <div className='container'>
      <Contacts_head data={textRu.contacts.head} />
      {/* <Divider />
      <Contacts_main data={textRu.contacts.body} /> */}
    </div>
  );
};

export default Contacts_page;
