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

for (let step of makePBnJ()) {
    step();
}

console.log("Eat that sandwich");