// Day 01
// Acitivity 04


// returns a function that console logs the str argument
// since the setTimeout method requires a function that hasn't been
// invoked yet, we have to return a function instead of just providing
// the console logs within this function.
function log(str) {
  return function() {console.log(str)}
}

console.log("==================== Question 01 ====================");
var one = setTimeout(log("Question1-1"), 1000 * 5);
var two = setTimeout(log("Question1-2"), 1000 * 6);
var three = setTimeout(log("Question1-3"), 1000 * 7);

// remove the timers `one`, `two`, and `three`
clearTimeout(one)
clearTimeout(two)
clearTimeout(three)


console.log("==================== Question 02 ====================");
// create a timer that logs "Hello" after 17 seconds

var hello = setTimeout(log("Hello!"),1000 * 17);

// remove the timer you just made

clearTimeout(hello)

console.log("==================== Question 03 ====================");
// create a timer that logs "Goodbye" after 17 seconds

var goodBye = setTimeout(log("Goodbye!"),1000*17);

// create a timer that removes the "Goodbye" timer after 5 seconds
// HINT: much like the `log` function we defined at the top of the page,
// you're going to have to create a function that returns another function

function removeGoodBye(){
  return clearTimeout(goodBye);
} 
setTimeout(removeGoodBye, 1000 * 5);

console.log("==================== Question 04 ====================");
// create a timer that logs "Part 1" after 3 seconds

var questionFour= setTimeout(log("Part 1"), 3000);

// create a timer that removes the "Part 1" timer after 2 seconds and also
// console logs out "Part 2" when it runs

 var questionTwo = setTimeout(function(){
  clearTimeout(questionFour);
  console.log("Part-2");
}, 2000)

// create a timer that removes the "Part 2" timer after 1 second and also
// console logs out "Part 3" when it runs

setTimeout(function(){
  clearTimeout(questionTwo);
  console.log("Part-3")
}, 1000)


console.log("==================== Question 05 ====================");
var alertArray = [
  setTimeout(log("Question5-1"), 1000 * 5),
  setTimeout(log("Question5-2"), 1000 * 5),
  setTimeout(log("Question5-3"), 1000 * 5),
  setTimeout(log("Question5-4"), 1000 * 5),
  setTimeout(log("Question5-5"), 1000 * 5),
  setTimeout(log("Question5-6"), 1000 * 5),
  setTimeout(log("Question5-7"), 1000 * 5),
  setTimeout(log("Question5-8"), 1000 * 5),
  setTimeout(log("Question5-9"), 1000 * 5),
  setTimeout(log("Question5-10"), 1000 * 5),
  setTimeout(log("Question5-11"), 1000 * 5),
];

clearTimeout(alertArray)
// remove all the timers created by `alertArray`.


