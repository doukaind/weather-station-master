import { initialState } from "./locationReducer";

const temperatureReducer = (
  state = initialState,
  action: Record<string, any>
) => {
  switch (action.type) {
    case "SWITCH_DEGREE_TYPE":
      return { ...state, isCelcius: true };
  }
  return state;
};

export default temperatureReducer;
