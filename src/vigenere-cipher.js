const CustomError = require("../extensions/custom-error");

let letterArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function fullLetter(string, key) {
  key = key.toUpperCase().split("");
  string = string.toUpperCase().split("");
  let useKeyWord = string;

  j = 0;
  for (i = 0; i < useKeyWord.length; i++) {
    stopSize = key.length;
    if (j === stopSize) j = 0;
    if (j < stopSize && useKeyWord[i] >= "A" && useKeyWord[i] <= "Z") {
      useKeyWord[i] = key[j];
      j++;
    }
  }

  return useKeyWord;
}

class VigenereCipheringMachine {
  constructor(bool) {
    this.bool = bool;
  }
  encrypt(string, key) {
    if (string === undefined || key === undefined) throw new Error("");

    let useKey = fullLetter(string, key);
    key = key.toUpperCase().split("");
    string = string.toUpperCase().split("");

    let encryptWord = "";

    for (let i = 0; i < string.length; i++) {
      if (string[i] < "A" || string[i] > "Z") {
        encryptWord += string[i];
      } else {
        let temp =
          (letterArray.indexOf(string[i]) + letterArray.indexOf(useKey[i])) %
          26;
        encryptWord += letterArray[temp];
      }
    }
    if (this.bool === false) {
      return encryptWord.split("").reverse().join("");
    } else {
      return encryptWord;
    }
  }

  decrypt(string, key) {
    if (string === undefined || key === undefined) throw new Error("");

    let useKey = fullLetter(string, key);
    key = key.toUpperCase().split("");
    string = string.toUpperCase().split("");

    let decryptWord = "";

    for (let i = 0; i < string.length; i++) {
      if (string[i] < "A" || string[i] > "Z") {
        decryptWord += string[i];
      } else {
        let temp = Math.abs(
          (letterArray.indexOf(string[i]) -
            letterArray.indexOf(useKey[i]) +
            26) %
            26
        );
        decryptWord += letterArray[temp];
      }
    }
    if (this.bool === false) {
      return decryptWord.split("").reverse().join("");
    } else {
      return decryptWord;
    }
  }
}

module.exports = VigenereCipheringMachine;
