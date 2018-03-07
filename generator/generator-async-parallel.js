let PBnJMaker = require("../pbnjmaker");
let async = require("../async");

function* getIngredients() {
    let p1 = PBnJMaker.fetchBread();
    let p2 = PBnJMaker.fetchPeanutButter();
    let p3 = PBnJMaker.fetchJam();
    let p4 = PBnJMaker.spreadPeanutButter();
    let p5 = PBnJMaker.spreadJam();
    yield [p1, p2, p3];
    yield [p4, p5];
    return PBnJMaker.closeSandwich();
}

function* prepareSandwich() {
    let p1 = PBnJMaker.spreadPeanutButter();
    let p2 = PBnJMaker.spreadJam();
    yield [p1, p2];
}

function* makePBnJ() {
    getIngredients();
    yield prepareSandwich();
    return PBnJMaker.closeSandwich();
}

async(getIngredients).then((result) => console.log("Eat that " + result));