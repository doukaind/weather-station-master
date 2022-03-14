import { SWITCH_DEGREE_TYPE } from "../actionTypes/degrees";
import {
  FETCH_LOCATION,
  SEARCH_CITY,
  SET_COORDS,
} from "../actionTypes/location";

export const initialState = {
  searchCity: "",
  location: {
    city: null,
  },
  days: {},
  currentGeo: {},
  error: false,
  isCelsius: true,
};

export const fetchLocation = (
  state = initialState,
  action: Record<string, any>
) => {
  switch (action.type) {
    case FETCH_LOCATION:
      const { consolidated_weather, title } = action?.payload;

      const weekWithoutToday = consolidated_weather.filter(
        (_: any, i: any) => i !== 0
      );

      return {
        ...state,
        days: { week: weekWithoutToday, today: consolidated_weather[0] },
        location: {
          city: title,
        },
      };
    case SWITCH_DEGREE_TYPE:
      return {
        ...state,
        isCelsius: !state.isCelsius,
      };
    case SEARCH_CITY:
      return {
        ...state,
        searchCity: action.payload,
      };
    case SET_COORDS:
      return {
        ...state,
        currentGeo: action.payload,
      };

    default:
      return state;
  }
};
