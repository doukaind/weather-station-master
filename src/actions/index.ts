import { SWITCH_DEGREE_TYPE } from "../actionTypes/degrees";
import {
  FETCH_CITY_PARAMETERS,
  FETCH_LOCATION,
  SEARCH_CITY,
  SET_COORDS,
} from "../actionTypes/location";
import {
  fetchCityParametersApi,
  fetchLocationSearch,
  fetchLocationSelectedApi,
} from "../apis/repository";
import useLocation from "../hooks/useLocation";
import { URL_API_SEARCH } from "../schemas/api";

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

export const setSearchCity = (payload: any) => ({
  type: SEARCH_CITY,
  payload,
});

export const setCoordsCurrent = (payload: any) => ({
  type: SET_COORDS,
  payload,
});

export const fetchSearch = () => async (dispatch: any, getState: any) => {
  console.log("what is state: ", getState, getState());

  const { searchCity, currentGeo } = getState().location;

  console.log("and we have searchCIty: ", searchCity, currentGeo);
  try {
    const URL_SEARCH =
      searchCity !== ""
        ? `${URL_API_SEARCH}?query=${searchCity}`
        : `${URL_API_SEARCH}?lattlong=${currentGeo.latitude},${currentGeo.longitude}`;

    console.log("URL_SEARCH: ", URL_SEARCH);
    const response = await fetchLocationSearch(URL_SEARCH).get("");

    console.log("what is the response?: ", response);
  } catch (error) {
    throw error;
  }
  // dispatch({ type: SET_COORDS, payload: {} });
};
