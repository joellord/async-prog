let PBnJMaker = require("../pbnjmaker");

let ingredients = ["Bread", "PeanutButter", "Jam"];
let steps = ingredients.map((i) => `fetch${i}`);
steps.push(...["spreadPeanutButter", "spreadJam"]);

async function makePBnJ(todo) {
    for (var i = 0; i < todo.length; i++) {
        await PBnJMaker[todo[i]]();
    }
    return PBnJMaker.closeSandwich();
}

makePBnJ(steps).then((result) => console.log("Eat that " + result));