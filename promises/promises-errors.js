let PBnJMaker = require("../pbnjmaker");

PBnJMaker.simulateError();

PBnJMaker.fetchBread().then(() => {
    return PBnJMaker.fetchPeanutButter();
}).then(() => {
    return PBnJMaker.fetchJam();
}).catch((err) => {
    console.log("Error fetching the ingredients");
}).then(() => {
    return PBnJMaker.spreadPeanutButter();
}).then(() => {
    return PBnJMaker.spreadJam();
}).catch((err) => {
    console.log("An error occurred while preparing the sandwich");
}).then(() => {
    return PBnJMaker.closeSandwich();
}).then((result) => {
    console.log("Eat that " + result);
}).catch((err) => {
    console.log("An error occurred");
});