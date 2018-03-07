let PBnJMaker = require("../pbnjmaker");

PBnJMaker.fetchBread().then(() => {
    return PBnJMaker.fetchPeanutButter();
}).then(() => {
    return PBnJMaker.fetchJam();
}).then(() => {
    return PBnJMaker.spreadPeanutButter();
}).then(() => {
    return PBnJMaker.spreadJam();
}).then(() => {
    return PBnJMaker.closeSandwich();
}).then((result) => {
    console.log("Eat that " + result);
});