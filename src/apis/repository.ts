import axios from "axios";
import { URL_API, URL_PROXY } from "../schemas/api";

export const fetchLocationSelected = axios.create({
  baseURL: `${URL_PROXY}${URL_API}523920`,
});
