import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
import EuroIcon from "@material-ui/icons/Euro";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import NoteIcon from "@material-ui/icons/Note";

import Context from "../../context/contex";

const Dash_nav = ({ closeMobile }) => {
  const { textRu } = useContext(Context);

  const iconSwitcher = (icon) => {
    switch (icon) {
      case "people":
        return <EmojiPeopleIcon />;
      case "developer":
        return <DeveloperModeIcon />;
      case "euro":
        return <EuroIcon />;
      case "note":
        return <NoteIcon />;
      case "contacts":
        return <ContactMailIcon />;
      default:
        return null;
    }
  };
  return (
    <>
      {textRu.dashbord.navLinks.map((item) => {
        const { url, id, link, icon } = item;
        return (
          <Link to={url} onClick={closeMobile} key={id}>
            <ListItem button>
              <ListItemIcon>{iconSwitcher(icon)}</ListItemIcon>
              <ListItemText>{link}</ListItemText>
            </ListItem>
          </Link>
        );
      })}
    </>
  );
};

export default Dash_nav;
