const temperatureReducer = (state: any = [], action: Record<string, any>) => {
  switch (action.type) {
    case "DEGREE_TYPE":
      return !state;
  }
  return state;
};

export default temperatureReducer;
