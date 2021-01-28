const CustomError = require("../extensions/custom-error");

chainArray = new Array();

const chainMaker = {
  chainArray: new Array(),
  getLength() {
    return chainArray.length;
  },
  addLink(value) {
    if (value === undefined) chainArray.push("");
    else chainArray.push(value);
    return this;
  },
  removeLink(position) {
    if (
      typeof position !== "number" ||
      position <= 0 ||
      position > this.getLength()
    ) {
      chainArray = [];
      throw Error();
    } else chainArray.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    chainArray.reverse();
    return this;
  },
  finishChain() {
    string = new Array();
    for (i = 0; i < this.getLength(); i++) {
      string.push(`( ${chainArray[i]} )`);
      string.push("~~");
    }
    chainArray = [];
    string.pop();
    return string.join("");
  },
};

module.exports = chainMaker;
