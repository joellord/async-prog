let PBnJMaker = require("../pbnjmaker");

Promise.all([PBnJMaker.fetchBread(), PBnJMaker.fetchPeanutButter(), PBnJMaker.fetchJam()])
    .then(() => {
        return Promise.all([PBnJMaker.spreadPeanutButter(), PBnJMaker.spreadJam()]);
    }).then(() => {
        return PBnJMaker.closeSandwich();
    }).then((result) => {
        console.log("Eat that " + result);
    });
