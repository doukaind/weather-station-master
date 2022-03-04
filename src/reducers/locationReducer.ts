import { FETCH_LOCATION } from "../actionTypes/location";

export const fetchLocation = (state: any = {}, action: Record<string, any>) => {
  console.log("ACTION TYPE: ", state, action);
  switch (action.type) {
    case FETCH_LOCATION:
      console.log("AM I HERE?");
      return { ...action.payload };
    default:
      return state;
  }
};
