const switchTheme = (theme) => {
  return {
    type: "SWITCH_THEME",
    payload: theme,
  };
};

const openModalSlider = (imgs) => {
  return {
    type: "OPEN_MODAL_SLIDER",
    payload: imgs,
  };
};

export { switchTheme, openModalSlider };
