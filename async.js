module.exports = (makeGenerator) => {
    let generator = makeGenerator.apply(this, arguments);

    function handle(result) {
        // A generator returns an object {done: [Boolean], value: [Any}}
        if (result.done) return Promise.resolve(result.value);
        return Promise.resolve(result.value).then(function(res) {
            return handle(generator.next(res));
        }, function(err) {
            return handle(generator.throw(err));
        });
    }

    try {
        return handle(generator.next());
    } catch(e) {
        return Promise.reject(e);
    }
};