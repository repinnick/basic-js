const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const T_PERIOD = 0.693;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity !== "string") {
    return false;
  }

  sampleActivity = Number(sampleActivity);

  if (sampleActivity > MODERN_ACTIVITY || sampleActivity <= 0) {
    return false;
  }

  k = T_PERIOD / HALF_LIFE_PERIOD;
  date = Math.log(MODERN_ACTIVITY / sampleActivity) / k;
  return Math.ceil(date);
};
