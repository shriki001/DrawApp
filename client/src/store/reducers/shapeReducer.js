const initState = {
  shape: "dot",
};

const ShapeReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_SHAPE":
      return {
        ...state,
        shape: action.shape,
      };
    default:
      return state;
  }
};
export default ShapeReducer;
