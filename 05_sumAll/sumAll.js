// function typeCheck(value) {
//     const return_value = Object.prototype.toString.call(value);
//     const type = return_value.substring(
//         return_value.indexOf(" ") + 1, 
//         return_value.indexOf("]"));
//     return type.toLowerCase();
// };

const sumAll = function(num1, num2) {
    let range = [];
    let sum;
    if ((num1 < 0 || num2 < 0) || !Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR"
        
    } else if (num1 < num2) {  
        for (let i = num1; i <= num2; ++i) {
            range.push(i);
            sum = range.reduce((a, b) => a + b, 0);
        } return sum;

    } else if (num1 > num2) {
        for (let i = num1; i > num2; --i) {
            range.push(i);
            sum = range.reduce((a, b) => a + b, num2);
        } return sum; 
    }
};

// sum = Number(range.join("+"));
// for (sum of range) {
//     sum += range
// }

// Do not edit below this line
module.exports = sumAll;
