import numeral from "numeral";

const formatNumTwo = (val: any) => {
  return numeral(val).format("0.00");
};

export default {
  formatNumTwo,
};
