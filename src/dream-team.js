const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members !== null && members !== undefined) {
    let array = new Array();
    for (let i = 0; i < members.length; i++)
      if (typeof members[i] === "string") {
        let j = 0;
        while (true) {
          if (members[i][j] === " ") {
            j++;
          } else {
            array.push(members[i][j]);
            break;
          }
        }
      }
    return array.join("").toUpperCase().split("").sort().join("");
  }
  return false;
};
