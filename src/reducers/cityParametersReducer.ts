import { FETCH_CITY_PARAMETERS, FETCH_LOCATION } from "../actionTypes/location";

export const fetchCityParametersReducer = (
  state: any = {},
  action: Record<string, any>
) => {
  switch (action.type) {
    case FETCH_CITY_PARAMETERS:
      return { ...action.payload };
    default:
      return state;
  }
};
