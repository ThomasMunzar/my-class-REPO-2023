// array that needs to be sorted

var unsortedArr = [
  1, 326, 251, 24, 284, 364, 287, 74, 89,
  63, 455, 130, 408, 378, 333, 49, 69, 335,
  195, 145, 122, 454, 30, 277, 208, 293, 311,
  88, 32, 5, 304, 239, 448, 61, 98, 382, 401,
  452, 233, 150, 109, 252, 305, 51, 161, 480,
  191, 44, 206, 451, 141, 182, 320, 355, 402,
  439, 13, 430, 449, 119, 166, 493, 396, 139,
  99, 262, 163, 410, 422, 275, 212, 416, 272,
  394, 379, 211, 491, 11, 133, 361, 160, 338,
  87, 199, 373, 38, 269, 73, 68, 359, 165, 291,
  418, 159, 481, 289, 469, 23, 432, 2, 315, 247,
  462, 189, 134, 330, 164, 153, 274, 371, 267,
  377, 347, 201, 19, 475, 66, 260, 497, 466, 426,
  12, 214, 306, 386, 194, 129, 219, 10, 288, 348,
  188, 59, 440, 498, 447, 297, 446, 57, 313, 175,
  80, 461, 312, 7, 215, 248, 107, 389, 46, 358,
  229, 72, 15, 492, 240, 217, 420, 110, 20, 383,
  124, 321, 183, 174, 374, 17, 488, 33, 256, 235,
  353, 387, 117, 479, 147, 483, 424, 428, 205, 28,
  392, 398, 216, 350, 34, 342, 135, 366, 125, 258,
  329, 362, 308, 295, 441, 242, 95, 406, 411, 286,
  14, 352, 433, 123, 340, 499, 101, 276, 37, 468,
  298, 75, 438, 131, 138, 96, 64, 246, 476, 487, 151,
  283, 106, 83, 273, 202, 323, 357, 414, 478, 172, 60,
  121, 127, 152, 48, 415, 234, 156, 8, 171, 176, 41,
  100, 413, 76, 128, 399, 132, 154, 423, 404, 302, 42,
  341, 173, 126, 427, 369, 26, 453, 180, 184, 55, 167,
  77, 307, 111, 445, 237, 16, 344, 290, 25, 356, 114,
  316, 39, 336, 90, 3, 465, 162, 470, 343, 429, 303,
  363, 29, 136, 203, 241, 4, 93, 221, 271, 395, 317,
  339, 86, 225, 436, 325, 47, 442, 137, 285, 474, 337,
  230, 376, 345, 245, 43, 236, 484, 318, 255, 105, 388,
  397, 27, 6, 31, 148, 372, 35, 393, 460, 384, 349, 490,
  264, 84, 300, 204, 482, 168, 67, 218, 331, 21, 473,
  210, 496, 467, 431, 116, 405, 450, 327, 407, 261, 309,
  157, 458, 223, 464, 224, 18, 142, 471, 457, 52, 82, 380,
  263, 367, 324, 281, 97, 412, 85, 149, 346, 265, 368, 193,
  266, 243, 434, 254, 456, 115, 118, 381, 70, 190, 94, 228,
  296, 314, 257, 403, 170, 232, 250, 360, 65, 417, 351, 71,
  62, 158, 365, 322, 500, 282, 375, 177, 187, 459, 112, 319,
  155, 489, 391, 178, 463, 22, 53, 91, 435, 231, 56, 103, 36,
  253, 477, 186, 45, 425, 120, 50, 140, 443, 146, 108, 259,
  238, 192, 222, 213, 200, 227, 354, 437, 280, 207, 143, 310,
  385, 370, 58, 444, 198, 278, 54, 494, 390, 113, 328, 144,
  268, 78, 9, 102, 197, 301, 226, 220, 334, 419, 299, 409, 421,
  292, 332, 209, 244, 196, 179, 472, 279, 40, 486, 270, 185,
  181, 485, 495, 81, 169, 294, 79, 400, 92, 104, 249
];

// Insert the contents of the unsorted array into the #start div
document.querySelector("#start").innerText = unsortedArr.join(", ");
// var arr = [13, 2, 55, 8]
// Brute force / naive solution
// a very basic implementation which is nice to understand the deep principle of bubble sort (going through all comparisons)

// The swap may look a bit confusing at first! Try to draw out/visualize the proccess. Remember that within javascript, variables don't actually store values, but rather they are pointers to values.


// your code goes here
// 2, 13, 8,55];

// [2, 13, 8, 55];
var bubbleSortProblem = function(sortMe)  {
  for (var i = 0; i < sortMe.length - 1; i++) {
    if (sortMe[i] > sortMe[i+1]) {
      var temp = sortMe[i+1];//8
      sortMe[i+1] = sortMe[i];//
      sortMe[i] = temp;//
    }
  }

  return sortMe
}



// [2, 55, 13, 8];

function bubbleSort(arr) {
  // sorted acts as a flag to let us know if our array has been completely sorted
  var sorted = false;

  while (sorted === false) {
    sorted = true;
    // Loop through the array
    for (var i = 0; i < arr.length - 1; i++) {
      // If the current element is larger than the next element, swap them and set sorted to `false`
      if (arr[i] > arr[i + 1]) {
        sorted = false;
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  // If we looped through the array without having to swap anything, exit the while loop and return the array
  return arr;
}

console.log("==========");

function bubbleSortDoWhile(arr) {
  // sorted acts as a flag to let us know if our array has been completely sorted
  var sorted = false;

  do {
    sorted = true;
    // Loop through the array
    for (var i = 0; i < arr.length - 1; i++) {
      // If the current element is larger than the next element, swap them and set sorted to `false`
      if (arr[i] > arr[i + 1]) {
        sorted = false;
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
   } while (sorted=== false);
  // If we looped through the array without having to swap anything, exit the while loop and return the array
  return arr;
}

console.log("==========");


// Get a reference to the go button in the DOM, add a click event listener to it
var goBtn = document.querySelector("#go");

goBtn.addEventListener("click", function() {
  // Get the sorted array, insert its contents into the #result div
  var sortedArr = bubbleSortBasic(unsortedArr);
  document.querySelector("#result").innerText = sortedArr.join(", ");
});

//==================

[2, 8, 13, 55]
function sort(arr) {
  for (var j = 0; j < arr.length; j++) {
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        var curr = arr[i]
        var prev = arr[i - 1]
        arr[i] = prev;
        arr[i - 1] = curr;
      }
    }
  }
  return arr
}
console.log(sort(unsortedArr));

//==================

function areDups(array){

  //Step One
  // Q: What are you going to do? 
  //A: sort the input array
  // Q: How are you going to do it? 
  // A: ??? JUST DO IT!!! 
  // Q: Why are you going to do it? 
  // A: to get all elements in order
  var sortedArray = bubbleSortBasic(array);
  console.log(sortedArray)
  //Step Two
  // Q: What are you going to do? 
  // A: iterate through every element of the sorte input array up until the length -1 (the second to last one)
  // Q: How are you going to do it? 
  // A: for loop
  // Q: Why are you going to do it? 
  // A: to examine every element
  for (var i = 0; i < sortedArray.length -1; i++) {
    //Step Three
    // Q: What are you going to do? 
    // A: while examining the initial element compare it to the element in the next index 
    // Q: How are you going to do it? 
    // A: index + 1, bracket notation, and comparison operator
    // Q: Why are you going to do it? 
    // A: to be able to compare elements of proximate values to see if they are equal. to see if any element is the same as any other - is the a duplicate value? 
    if(sortedArray[i] === sortedArray[i + 1]){
      console.log(sortedArray[i]);
      console.log(sortedArray[i + 1]);
      // Step Four
      // Q: What are you going to do? 
      // A: return true if a dup is found
      // Q: How are you going to do it? 
      // A: return statement
      // Q: Why are you going to do it? 
      // A: we found a duplicate value - return true
      console.log("True - DUPS!");
      return true;
    }
  }
  // Step Five
  // Q: What are you going to do? 
  // A: return False
  // Q: How are you going to do it? 
  // A: Return Statement
  // Q: Why are you going to do it? 
  // A: Once we have iterated through the entire input array and compared every element against its neighbor element and not found a match return false - no dup found
  console.log("False - No DUPS!");
  return false;
};

var sortMe = [1, 326, 251, 24, 284, 364, 287, 74, 89, 44];
areDups(sortMe);//false - no dups

console.log("**********")

var noDups = [33, 22, 8, 9, 33];
areDups(noDups);//true




//=================

// [13, 2, 55, 8]
// [2, 8, 13, 55]
// [2, 13, 55, 8]
function bubbleSortBasic(arr) {
  // loop through the array
  for(var i = 0; i < arr.length; i++) {
    // within this loop run another for loop, starting at the second element of the array index 1
    for(var j = 1; j < arr.length; j++) {
      // if the current element is larger than the next element...
      if(arr[j - 1] > arr[j]) {
      // create a temp variable to hold the value of the current element
        var temp = arr[j - 1];//arr[0] => 13
      // set the current element to the next element
        arr[j - 1] = arr[j];//2
      // and then finally set the next element to our temp variable 
        arr[j] = temp;//13
      }
    }
  }
  return arr;
}




function bubbleSortRecursive(array) {

    // terminating condition
    var sorted = true;
    for (var i = 0; i < array.length -1; ++i) {
        if (array[i] > array[i + 1]) {
            /* swap */
            var tmp = array[i + 1];
            array[i + 1] = array[i];
            array[i] = tmp;
            sorted = false;
        }
    }
    if (sorted) {
        console.log("sorted", array[array.length -1 ], array )
        return array;
    }
    // tail recursion
    return bubbleSortRecursive(array);
}

bubbleSortRecursive(unsortedArr)

[2, 8, 13, 55]
function sort(arr) {
  for (var j = 0; j < arr.length; j++) {
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        var curr = arr[i]
        var prev = arr[i - 1]
        arr[i] = prev;
        arr[i - 1] = curr;
      }
    }
  }
  return arr
}
console.log(sort(unsortedArr));


// Do While


console.log("==========");


// While Loop: Loops can execute a block of code as long as a specified condition is true.
  var i = 0;
  while (i < students.length) {
  console.log("Good to see you, " + students[i] + "!");
  i++;
  }

console.log("==========");

// The do...while statement creates a loop that executes a specified statement 
// until the test condition evaluates to false. 
// The condition is evaluated after executing the statement, 
// resulting in the specified statement executing at least once.
var i = 0;
do {
  console.log("Good to see you, " + students[i] + "!");
  i = i + 1;
  // i++
} while (i < students.length);


console.log("==========");

var foundStudent = false;
var i = 0;
while(!foundStuent && i < students.length ){
  if(students[i] === "Heather"){
    foundStuent = true;
    console.log("Found " + students[i])
  }
  if(i >= students.length -1 && !foundStudent){
    console.log("student Not Found");
    
  }else if (!foundStuent){
    console.log("Current Student: " + students[i])
    i++;
  }
  
}