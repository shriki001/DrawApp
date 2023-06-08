const initState = {
  color: "transparent",
};

const ColorReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_COLOR":
      return {
        ...state,
        color: action.color,
      };
    default:
      return state;
  }
};
export default ColorReducer;
