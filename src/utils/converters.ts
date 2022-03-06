import intNumber from "./intNumber";

const toFahrenheit = (temp: number) => {
  return temp * 1.8 + 32;
};

export const getNameDegree = (isCelsius: boolean) => {
  return isCelsius ? "°C" : "°F";
};

export const setConvertDegrees = (temp: any, isCelsius: boolean) => {
  console.log(temp, isCelsius);
  return isCelsius ? temp : intNumber(toFahrenheit(temp));
};
