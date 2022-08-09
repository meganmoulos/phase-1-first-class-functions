function receivesAFunction(cb) {
    return cb();
}

const returnsANamedFunction = function newFunction () {
    return newFunction;
}

const returnsAnAnonymousFunction = function() {
    return function() {
        return 'Hello';
    };
}