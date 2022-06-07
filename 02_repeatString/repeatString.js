const repeatString = function(string, num) {
    let newString = string;
    for (let i = 1; i < num; ++i) {
        newString += string;
    } if (num > 0) {
        return newString;
    } else if (num < 0) {
        return "ERROR";
    } else {
        return "";
    }
};

// Do not edit below this line
module.exports = repeatString;
