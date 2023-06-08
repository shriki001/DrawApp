import ColorReducer from "./colorReducer";
import ShapeReducer from "./shapeReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  color: ColorReducer,
  shape: ShapeReducer,
});
export default rootReducer;
