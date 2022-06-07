const removeFromArray = function(array, ...args) {
    return array.filter(x => !args.includes(x));
    // args = arguments[0] - arguments[1];
    // arguments[0].slice(2, 0);
    // arguments[1].slice(0, 0);
};

// Do not edit below this line
module.exports = removeFromArray;
