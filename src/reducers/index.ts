import { combineReducers } from "redux";
import { fetchCityParametersReducer } from "./cityParametersReducer";
import { fetchLocation } from "./locationReducer";

export default combineReducers({
  location: fetchLocation,
  // fetchCityParametersReducer,
});
