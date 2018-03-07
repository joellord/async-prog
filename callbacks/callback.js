let PBnJMaker = require("../pbnjmaker");

PBnJMaker.fetchBread(() => {
    PBnJMaker.fetchPeanutButter(() => {
        PBnJMaker.fetchJam(() => {
            PBnJMaker.spreadPeanutButter(() => {
                PBnJMaker.spreadJam(() => {
                    PBnJMaker.closeSandwich((err, output) => {
                        console.log("Eat that " + output);
                    });
                });
            });
        });
    });
});