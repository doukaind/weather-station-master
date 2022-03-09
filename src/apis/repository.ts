import axios from "axios";
import { URL_API, URL_API_SEARCH, URL_PROXY } from "../schemas/api";

export const fetchLocationSelectedApi = axios.create({
  baseURL: `${URL_PROXY}${URL_API}`,
});

export const fetchCityParametersApi = (city: string) =>
  axios.create({
    baseURL: `${URL_PROXY}${URL_API_SEARCH}?query=${city}`,
  });

export const fetchLocationSearch = (location: any) =>
  axios.create({
    baseURL: `${URL_PROXY}${location}`,
  });
