function add(string) {
  result = 0;

  digitiser = string.match(/[-]{0,1}[\d]+/g);

  if (string === "") {
    return 0;
  }

  for (k = 0; k < digitiser.length; k++) {
    let sum = parseInt(digitiser[k]);

    if (sum < 0) {
      throw new Error("negatives are not allowed, ") + sum;
    }
    if (sum > 1000) {
      sum -= sum;
    }
    result += sum;
  }
  return result;
}

module.exports = add;
