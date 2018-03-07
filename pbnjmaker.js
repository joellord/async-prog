const axios = require("axios");
const EventEmitter = require('events');
const SERVER = "http://localhost:3000/";

let FAKE_ERR = false;
let VERBOSE = false;

class MyEmitter extends EventEmitter {}
const eventEmitter = new MyEmitter();

let asyncRestCall = function(options) {
    if (VERBOSE) console.log(options.verboseText);
    return axios.get(SERVER + options.url).then((response) => {
        console.log(response.data);
        eventEmitter.emit(options.event, options.arg);
        if (options.cb !== undefined) {
            options.cb(undefined, options.arg);
        } else {
            return Promise.resolve(options.arg);
        }
    }).catch((err) => {
        if (options.cb) options.cb(err);
        else return Promise.reject(err);
    });
};

exports.simulateError = () => {
    FAKE_ERR = true;
};

exports.verbose = () => {
    VERBOSE = true;
};

exports.fetchBread = (cb) => {
    let options = {
        url: FAKE_ERR ? "ingredients/brad" : "ingredients/bread",
        event: "breadFetched",
        verboseText: "Initiate bread fetching",
        cb
    };
	return asyncRestCall(options);
};

exports.fetchPeanutButter = (cb) => {
    let options = {
        url: "ingredients/peanutbutter",
        event: "peanutButterFetched",
        verboseText: "Initiate peanut butter fetching",
        cb
    };
    return asyncRestCall(options);
};

exports.fetchJam = (cb) => {
    let options = {
        url: "ingredients/jam",
        event: "jamFetched",
        verboseText: "Initiate jam fetching",
        cb
    };
    return asyncRestCall(options);
};

exports.spreadPeanutButter = (cb) => {
    let options = {
        url: "spread/peanutbutter",
        event: "peanutButterSpreaded",
        verboseText: "Initiate peanut butter spread",
        cb
    };
    return asyncRestCall(options);
};

exports.spreadJam = (cb) => {
    let options = {
        url: "spread/jam",
        event: "jamSpreaded",
        verboseText: "Initiate jam spread",
        cb
    };
    return asyncRestCall(options);
};

exports.closeSandwich = (cb) => {
    let options = {
        url: "close",
        event: "sandwichClosed",
        verboseText: "Getting ready to close the sandwich",
        arg: "PBnJ Sandwich",
        cb
    };
    return asyncRestCall(options);
};

exports.Events = eventEmitter;