import { combineReducers } from "redux";
import { fetchLocation } from "./locationReducer";
import temperatureReducer from "./temperatureReducer";

export default combineReducers({
  temperature: temperatureReducer,
  fetchLocation,
});
