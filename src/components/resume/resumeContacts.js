import React from "react";

import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import LanguageIcon from "@material-ui/icons/Language";
import RoomIcon from "@material-ui/icons/Room";

const ResumeContacts = ({ data }) => {
  const contactsSwircher = (icon) => {
    switch (icon) {
      case "phone":
        return <PhoneIcon />;
      case "mail":
        return <MailIcon />;
      case "website":
        return <LanguageIcon />;
      case "location":
        return <RoomIcon />;
      default:
        return;
    }
  };
  return (
    <ul className="list-unstyled">
      {data.map((data) => {
        const { cont, link, icon, id } = data;
        return (
          <li key={id}>
            {contactsSwircher(icon)}
            <a href={link}>{cont}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default ResumeContacts;
