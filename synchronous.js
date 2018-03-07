let PBnJMaker = require("./pbnjmaker");

PBnJMaker.fetchBread();
PBnJMaker.fetchPeanutButter();
PBnJMaker.fetchJam();
PBnJMaker.spreadPeanutButter();
PBnJMaker.spreadJam();
let result = PBnJMaker.closeSandwich();
console.log("Eat that " + result);