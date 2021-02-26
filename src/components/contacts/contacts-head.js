import React from "react";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TelegramIcon from "@material-ui/icons/Telegram";
import ReactHtmlParser from "react-html-parser";
import "./contacts-head.css";

const Contacts_head = ({ data }) => {
  const { title, subTitle, whats, telegram } = data;
  return (
    <div className="text-center p-2">
      <div className="contacts_head">
        <h2 className="display-5 font-weight-bold">{title}</h2>
        <p>{ReactHtmlParser(subTitle)}</p>
      </div>
      <div className="contacts_icons m-2">
        <a href={whats} className="mr-2 whats">
          <WhatsAppIcon />
        </a>
        <a href={telegram} className="teleg">
          <TelegramIcon />
        </a>
      </div>
    </div>
  );
};
export default Contacts_head;
