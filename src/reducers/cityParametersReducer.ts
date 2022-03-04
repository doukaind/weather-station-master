import { FETCH_CITY_PARAMETERS, FETCH_LOCATION } from "../actionTypes/location";

export const fetchCityParametersReducer = (
  state: any = {},
  action: Record<string, any>
) => {
  console.log("ACTION TYPE: ", state, action);
  switch (action.type) {
    case FETCH_CITY_PARAMETERS:
      console.log("AM I HERE?");
      return { ...action.payload };
    default:
      return state;
  }
};
