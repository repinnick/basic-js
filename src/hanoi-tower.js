const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  turns = 2 ** disksNumber - 1;
  speed = Math.floor(turns / (turnsSpeed / 3600));
  return { turns: turns, seconds: speed };
};
