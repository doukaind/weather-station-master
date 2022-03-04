import { combineReducers } from "redux";
import { fetchCityParametersReducer } from "./cityParametersReducer";
import { fetchLocation } from "./locationReducer";
import temperatureReducer from "./temperatureReducer";

export default combineReducers({
  temperature: temperatureReducer,
  location: fetchLocation,
  // fetchCityParametersReducer,
});
