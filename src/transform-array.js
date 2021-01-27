const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (typeof arr !== "object") throw Error;
  arr2 = new Array();
  for (i = 0; i < arr.length; i++) {
    if (arr[i + 1] === "--discard-prev" || arr[i] === "--discard-prev") {
    } else if (arr[i] === "--discard-next") i++;
    else if (arr[i] === "--double-next") {
      if (arr[i + 1] !== undefined) arr2.push(arr[i + 1]);
    } else if (arr[i] == "--double-prev") {
      if (arr[i - 2] == "--discard-next") {
      } else if (arr[i - 1] !== undefined) arr2.push(arr[i - 1]);
    } else arr2.push(arr[i]);
  }
  return arr2;
};
