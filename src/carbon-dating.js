const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const T_PERIOD = 0.693;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") {
    return false;
  }

  sampleActivity = Number(sampleActivity);

  if (
    isNaN(sampleActivity) ||
    sampleActivity > MODERN_ACTIVITY ||
    sampleActivity <= 0
  ) {
    return false;
  }

  let k = T_PERIOD / HALF_LIFE_PERIOD;
  let date = Math.log(MODERN_ACTIVITY / sampleActivity) / k;
  return Math.ceil(date);
};
