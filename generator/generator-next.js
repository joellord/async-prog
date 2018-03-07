let PBnJMaker = require("../pbnjmaker");

PBnJMaker.verbose();

function* makePBnJ() {
    yield PBnJMaker.fetchBread;
    yield PBnJMaker.fetchPeanutButter;
    yield PBnJMaker.fetchJam;
    yield PBnJMaker.spreadPeanutButter;
    yield PBnJMaker.spreadJam;
    yield PBnJMaker.closeSandwich;
}

let iterator = makePBnJ();
console.log("Launching PBnJ preparation sequence");

iterator.next().value();
iterator.next().value();
iterator.next().value();
iterator.next().value();
iterator.next().value();
let result = iterator.next().value();

console.log("Eat that " + result);