import { SWITCH_DEGREE_TYPE } from "../actionTypes/degrees";
import { FETCH_LOCATION } from "../actionTypes/location";
import { fetchLocationSelected } from "../apis/repository";
import { URL_API, URL_PROXY } from "../schemas/api";

export const switchDegreeType = () => ({
  type: SWITCH_DEGREE_TYPE,
});

export const fetchLocation = () => async (dispatch: any) => {
  // console.log("ERROR: ", `${URL_PROXY}${URL_API}/523920`");
  const response = await fetchLocationSelected.get("", {
    headers: {
      // "Access-Control-Allow-Origin": "*",
    },
  });
  dispatch({ type: FETCH_LOCATION, payload: response });
};
