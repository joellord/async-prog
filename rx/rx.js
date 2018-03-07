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

const eventNames = ["breadFetched", "peanutButterFetched", "jamFetched", "peanutButterSpreaded", "jamSpreaded", "sanwichClosed"];

const eventStreams = eventNames.map((eventName) => {
    return Rx.Observable.fromEvent(PBnJMaker.Events, eventName);
});

const allEvents$ = Rx.Observable.merge(...eventStreams);

const subscription = allEvents$.subscribe(() => {
    console.log("An event just happened");
});