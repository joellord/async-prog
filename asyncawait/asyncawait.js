let PBnJMaker = require("../pbnjmaker");

async function makePBnJ() {
    await PBnJMaker.fetchBread();
    await PBnJMaker.fetchPeanutButter();
    await PBnJMaker.fetchJam();
    await PBnJMaker.spreadPeanutButter();
    await PBnJMaker.spreadJam();
    return PBnJMaker.closeSandwich();
}

makePBnJ().then((result) => console.log("Eat that " + result));