let PBnJMaker = require("../pbnjmaker");

let ingredientsFetched = 0;
let ingredientsSpreaded = 0;

let ingredientFetched = () => {
    ingredientsFetched++;
    if (ingredientsFetched === 3) {
        PBnJMaker.Events.emit("ingredientsFetched");
    }
};

let spreaded = () => {
    ingredientsSpreaded++;
    if (ingredientsSpreaded === 2) {
        PBnJMaker.Events.emit("ingredientsSpreaded");
    }
};

PBnJMaker.Events.on("breadFetched", ingredientFetched);
PBnJMaker.Events.on("peanutButterFetched", ingredientFetched);
PBnJMaker.Events.on("jamFetched", ingredientFetched);

PBnJMaker.Events.on("ingredientsFetched", () => {
    PBnJMaker.spreadPeanutButter();
    PBnJMaker.spreadJam();
});

PBnJMaker.Events.on("peanutButterSpreaded", spreaded);
PBnJMaker.Events.on("jamSpreaded", spreaded);

PBnJMaker.Events.on("ingredientsSpreaded", () => {
    PBnJMaker.closeSandwich();
});

PBnJMaker.Events.on("sandwichClosed", (result) => console.log("Eat that " + result));

PBnJMaker.fetchBread();
PBnJMaker.fetchPeanutButter();
PBnJMaker.fetchJam();
