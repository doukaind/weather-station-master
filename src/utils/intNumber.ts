const intNumber = (number: number) => Math.round(number);

export default intNumber;

export const numberOneFixed = (number: number) => number.toFixed(1).replace(".", ",");
