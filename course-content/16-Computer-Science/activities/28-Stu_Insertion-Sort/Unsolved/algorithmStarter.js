// ===============================================
// RUN THIS USING NODE
// ===============================================

// ================================================
// TEST CASES
// ================================================

// Case 1 - Small Set of Numbers
var arraySize = 40;

// // Case 2 - Large set of Numbers
// var arraySize = 400000;

var array = [];
for (var index = 0; index < arraySize; index++) {
  var randomNumber = Math.round(Math.random() * arraySize);

  array.push(randomNumber);
}

// ================================================
// SOLUTION - Insertion Sort
// ================================================

// Start at the beginning of the array
function insertionSort(array) {
  
}
// Move into a loop
// Compare only 2 values
// Swap if left is more than right
// Repeat until this current value is greater than the left value
// OR the current value is at the far left of the array (the zero index)





// ================================================
// FUNCTION CALL
// ================================================
console.log("PRE-SORT");
console.log(array.join(" "));
console.log("---------------------------");
console.log("POST-SORT");
console.log(insertionSort(array).join(" "));
