const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let maxStepToDive = 1;

    arr.forEach((element) => {
      let counter = 0;
      if (Array.isArray(element)) {
        counter += 1 + this.calculateDepth(element);
      }
      if (counter > maxStepToDive) {
        maxStepToDive = counter;
      }
    });

    return maxStepToDive;
  }
};
