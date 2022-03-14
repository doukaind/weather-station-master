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
  const response = await fetchLocationSelectedApi.get("523920");

  dispatch({ type: FETCH_LOCATION, payload: response.data });
};

export const fetchCityParameters = () => async (dispatch: any) => {
  const response = await fetchCityParametersApi("Warsaw").get("");

  dispatch({ type: FETCH_CITY_PARAMETERS, payload: response.data });
};

export const setSearchCity = (payload: any) => async (dispatch: any) => {
  const responseCity = (await fetchCityParametersApi(payload).get("")).data[0];

  const response = await fetchLocationSelectedApi.get(
    responseCity.woeid.toString()
  );

  dispatch({ type: FETCH_LOCATION, payload: response.data });
};
export const setCoordsCurrent = (payload: any) => ({
  type: SET_COORDS,
  payload,
});

export const fetchSearch = () => async (dispatch: any, getState: any) => {
  const { searchCity, currentGeo } = getState().location;

  try {
    const URL_SEARCH =
      searchCity !== ""
        ? `${URL_API_SEARCH}?query=${searchCity}`
        : `${URL_API_SEARCH}?lattlong=${currentGeo.latitude},${currentGeo.longitude}`;

    const response = await fetchLocationSearch(URL_SEARCH).get("");
  } catch (error) {
    throw error;
  }
  // dispatch({ type: SET_COORDS, payload: {} });
};
