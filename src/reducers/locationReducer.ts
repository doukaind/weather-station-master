import { FETCH_LOCATION } from "../actionTypes/location";

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
  console.log("THIS IS STATE!: ", state);
  switch (action.type) {
    case FETCH_LOCATION:
      const { consolidated_weather } = action?.payload;
      const weekWithoutToday = consolidated_weather.filter(
        (_: any, i: any) => i !== 0
      );
      // state = console.log("AM I HERE?");
      console.log("WHAT IS AN OBJECT: ", state, {
        ...state,
        days: { week: weekWithoutToday, today: consolidated_weather[0] },
      });
      return {
        ...state,
        days: { week: weekWithoutToday, today: consolidated_weather[0] },
      };
    default:
      return state;
  }
};
