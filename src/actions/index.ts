import { SWITCH_DEGREE_TYPE } from "../actionTypes/degrees";
import { FETCH_CITY_PARAMETERS, FETCH_LOCATION } from "../actionTypes/location";
import {
  fetchCityParametersApi,
  fetchLocationSelectedApi,
} from "../apis/repository";

export const switchDegreeType = () => ({
  type: SWITCH_DEGREE_TYPE,
});

export const fetchLocation = () => async (dispatch: any) => {
  // console.log("ERROR: ", `${URL_PROXY}${URL_API}/523920`");
  const response = await fetchLocationSelectedApi.get("523920");
  console.log("WHAT IS THE RESPONSE: ", response);
  dispatch({ type: FETCH_LOCATION, payload: response.data });
};

export const fetchCityParameters = () => async (dispatch: any) => {
  const response = await fetchCityParametersApi("Warsaw").get("");
  console.log("RESPONSE: ", response);
  dispatch({ type: FETCH_CITY_PARAMETERS, payload: response.data });
};
