let PBnJMaker = require("../pbnjmaker");
let ingredients = 0;
let steps = 0;
// PBnJMaker.simulateError();

function fetchIngredients() {
    PBnJMaker.fetchBread(handleIngredients);
    PBnJMaker.fetchPeanutButter(handleIngredients);
    PBnJMaker.fetchJam(handleIngredients);
}

function handleIngredients(err) {
    if (err) return console.log("An error occurred while fetching the ingredients");
    ingredients++;
    if (ingredients === 3) {
        prepareSandwich();
    }
}

function prepareSandwich() {
    PBnJMaker.spreadPeanutButter(preparationStepCompleted);
    PBnJMaker.spreadJam(preparationStepCompleted);
}

function preparationStepCompleted(err) {
    if (err) return console.log("An error occurred while preparing the sandwich");
    steps++;
    if (steps === 2) {
        completeSandwich();
    }
}

function completeSandwich(err) {
    PBnJMaker.closeSandwich((err, result) => {
        if (err) {
            console.log("An error occurred");
        } else {
            console.log("Eat that " + result);
        }
    });
}

fetchIngredients();