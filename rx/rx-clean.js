const Rx = require("rxjs");
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

const ingredients = ["bread", "peanutButter", "jam"];

const ingredientEvents = ingredients.map((ingredient) => {
    return Rx.Observable.fromEvent(PBnJMaker.Events, `${ingredient}Fetched`);
});

const ingredientEvents$ = Rx.Observable.merge(...ingredientEvents);

const subscription = ingredientEvents$.subscribe(() => {
    console.log("Just fetched an ingredient");
});