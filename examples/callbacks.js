let fs = require("fs");

// //Synchronous
// let array = [1,2,3];
// console.log("begin");
// array.map((i) => {console.log(i)});
// console.log("after");

//Asynchronous
console.log("begin");
fs.readFile("./cb.txt", (err, data) => {
    console.log("This is the content of the file");
});
console.log("after");