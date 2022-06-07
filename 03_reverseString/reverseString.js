const reverseString = function(str) {
    let chars = str.split("");
    let charsReversed = chars.reverse();
    let strReversed = charsReversed.join("");
    return strReversed;
}
// for (char of chars) {
    
// }
// for (i = 0; i > (chars.length * -1); --i) {
//     strReversed += chars[i];
// };
// strReversed.map()

// Write a function that reverses strings, by splitting characters and joining the reversed result back together using arrays?
// It should work with multiple words, punctuation and numbers, and blank strings.

// const reverseString = function(string) {
//     var to split string into array
//     map loop to extract and store characters in a new var string in reversed order
// };

// Do not edit below this line
module.exports = reverseString;
