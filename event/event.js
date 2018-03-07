let PBnJMaker = require("../pbnjmaker");

PBnJMaker.Events.on("breadFetched", () => {
    PBnJMaker.fetchPeanutButter();
});
PBnJMaker.Events.on("peanutButterFetched", () => PBnJMaker.fetchJam());
PBnJMaker.Events.on("jamFetched", () => PBnJMaker.spreadPeanutButter());
PBnJMaker.Events.on("peanutButterSpreaded", () => PBnJMaker.spreadJam());
PBnJMaker.Events.on("jamSpreaded", () => PBnJMaker.closeSandwich());
PBnJMaker.Events.on("sandwichClosed", (result) => console.log("Eat that " + result));

PBnJMaker.fetchBread();
