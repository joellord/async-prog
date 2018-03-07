let PBnJMaker = require("../pbnjmaker");
let async = require("../async");

function* makePBnJ() {
    yield PBnJMaker.fetchBread();
    yield PBnJMaker.fetchPeanutButter();
    yield PBnJMaker.fetchJam();
    yield PBnJMaker.spreadPeanutButter();
    yield PBnJMaker.spreadJam();
    return PBnJMaker.closeSandwich();
}

async(makePBnJ).then((result) => console.log("Eat that " + result));