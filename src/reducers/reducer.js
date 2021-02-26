const initialState = {
  themePage: localStorage.theme === "dark" ? localStorage.theme : "light",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SWITCH_THEME":
      localStorage.setItem("theme", action.payload ? "light" : "dark");
      return {
        ...state,
        themePage: localStorage.theme === "dark" ? localStorage.theme : "light",
      };
    default:
      return state;
  }
};

export default reducer;
