const originalArray = [1, 3, 2, 5, 10];
// DECLARING GLOBAL ARRAY
// evenNumbers is equal to a new array of even numbers returned by filter(). filter() will use an anonymous function as a condition. 
const evenNumbers = originalArray.filter(function(data) { // breaking up array into filter data (each index)
  // The anonymous function uses a conditional to check if a number is divisible by 2. 
  if (data % 2 === 0) {
    // If a number is even (divisible by 2), the condition returns true.
    return true;
  }
});

// We are taking the original Array and filtering out the even numbers and creating a new array called even numbers and we are not chaning the original array!&***********NOTE

console.log(evenNumbers);
console.log(originalArray);

const isPrime = num => {
  // Set up a loop the starts with 2 and continues to increment i as long as i is less than 2
  for (let i = 2; i < num; i++) {
    // isPrime will return false if num is divisible by any number other than 1 or num.
    if (num % i === 0) return false;
  }
  // Otherwise, isPrime will return num, unless num == 1.
  return num !== 1;
};


// TODO: Describe how filter is working in this example. What will the value of primeArray be? 
const primeArray = originalArray.filter(isPrime);
console.log(primeArray) // FILTER will take in a call back function and return TRUE of FALSE
//*****NOTES******* 

// TODO: Describe how filter is working in this example. What will the value of moreThan5Array be? 
const moreThan5Array = originalArray.filter(num => num > 5);

console.log(moreThan5Array)

// FILTER RUNS THRU ARRAY AND WORKS THE FUNCTION IT IS LIKE A MEGA FOR LOOP