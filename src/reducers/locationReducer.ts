export const fetchLocation = (
  state: any = null,
  action: Record<string, any>
) => {
  switch (action.type) {
    case "SWITCH_DEGREE_TYPE":
      return !state;
  }
  return state;
};
