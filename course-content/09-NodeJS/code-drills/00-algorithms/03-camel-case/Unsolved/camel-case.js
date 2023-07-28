// Write code to create a function that accepts a string and returns the string in camelCase

var str = "let the force flow through you";

var camelCase = function(str) {
// uppercase every first character starting on the second word
// remove spaces in between words
var strArr = str.split(" ");
 strArr[0][0].toLowerCase()
console.log(strArr[0][0])
for (let i =1; i < strArr.length; i++ ){
    let word = strArr[i]
     word[0].toUpperCase()
    console.log(word[0])
}

console.log(strArr.join(""))
return strArr.join("")


};
