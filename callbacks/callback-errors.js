let PBnJMaker = require("../pbnjmaker");

PBnJMaker.simulateError();

PBnJMaker.fetchBread((err) => {
    if (err) {
        console.log("An error occurred while fetching the ingredients");
    } else {
        PBnJMaker.fetchPeanutButter((err) => {
            if (err) {
                console.log("An error occurred while fetching the ingredients");
            } else {
                PBnJMaker.fetchJam((err) => {
                    if (err) {
                        console.log("An error occurred while fetching the ingredients");
                    } else {
                        PBnJMaker.spreadPeanutButter((err) => {
                            if (err) {
                                console.log("An error occurred while preparing the sandwich");
                            } else {
                                PBnJMaker.spreadJam((err) => {
                                    if (err) {
                                        console.log("An error occurred while preparing the sandwich");
                                    } else {
                                        PBnJMaker.closeSandwich((err, result) => {
                                            if (err) {
                                                console.log("An error occurred");
                                            } else {
                                                console.log("Eat that " + result);
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
});