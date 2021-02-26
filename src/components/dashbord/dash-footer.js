import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import NightsStayIcon from "@material-ui/icons/NightsStay";

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 60,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(34px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: "#43A076",
        opacity: 1,
        border: "none",
      },
    },
    "&$focusVisible $thumb": {
      color: "#43A076",
      border: "6px solid #fff",
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

function CustomizedSwitches({ switchTheme }) {
  const [state, setState] = useState({
    nightMode:
      localStorage.length > 0 && localStorage.theme === "dark" ? true : false,
  });
  const handleChange = (e) => {
    setState({
      ...state,
      nightMode: e.target.checked,
    });
    switchTheme(state.nightMode);
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <IOSSwitch
            checked={state.nightMode}
            onChange={handleChange}
            name="Night"
          />
        }
        label={<NightsStayIcon />}
      />
    </FormGroup>
  );
}

export default CustomizedSwitches;
