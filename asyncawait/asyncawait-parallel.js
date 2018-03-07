let PBnJMaker = require("../pbnjmaker");

async function getIngredients() {
    let p1 = PBnJMaker.fetchBread();
    let p2 = PBnJMaker.fetchPeanutButter();
    let p3 = PBnJMaker.fetchJam();
    return await p1 + await p2 + await p3;
}

async function prepareSandwich() {
    let p1 = PBnJMaker.spreadPeanutButter();
    let p2 = PBnJMaker.spreadJam();
    return await p1 + await p2;
}

async function makePBnJ() {
    await getIngredients();
    await prepareSandwich();
    return PBnJMaker.closeSandwich();
}
makePBnJ().then((result) => console.log("Eat that " + result));
