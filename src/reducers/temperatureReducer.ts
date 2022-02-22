const temperatureReducer = (
  state: boolean = false,
  action: Record<string, any>
) => {
  switch (action.type) {
    case "SWITCH_DEGREE_TYPE":
      return !state;
  }
  return state;
};

export default temperatureReducer;
