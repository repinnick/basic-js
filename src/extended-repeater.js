const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  separator = options.separator ? options.separator.toString() : "+";
  addition = options.addition !== undefined ? String(options.addition) : "";
  additionRepeatTimes = options.additionRepeatTimes
    ? options.additionRepeatTimes
    : 1;
  additionSeparator = options.additionSeparator
    ? options.additionSeparator.toString()
    : "|";

  simpleString = str;
  for (i = 0; i < additionRepeatTimes; i++) {
    if (i + 1 === additionRepeatTimes) simpleString += addition;
    else simpleString += addition + additionSeparator;
  }

  combineString = "";
  for (i = 0; i < repeatTimes; i++) {
    if (i + 1 === repeatTimes) combineString += simpleString;
    else combineString += simpleString + separator;
  }

  return combineString;

  // console.log(combineString);
};

// repeater("STRING", {
//   repeatTimes: 3,
//   separator: "**",
//   addition: "PLUS",
//   additionRepeatTimes: 3,
//   additionSeparator: "00",
// });

// 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
