const switchTheme = (theme) => {
  return {
    type: "SWITCH_THEME",
    payload: theme,
  };
};

export { switchTheme };
