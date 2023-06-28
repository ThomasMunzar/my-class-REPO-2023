// WRITE YOUR CODE HERE
var name = "Matt"
var namesArr = ["Matt", "Thomas", "Kayla", "Sam", "Stephanie"]

console.log(namesArr)
console.log("Welcome to the class " + namesArr[4])
console.log("Welcome to the class " + namesArr[3])
console.log("Welcome to the class " + namesArr[2])
console.log("Welcome to the class " + namesArr[1])
console.log("Welcome to the class " + namesArr[0])

namesArr[0] = "Tyler"
console.log(namesArr[0]);

if (namesArr[0] !== "Matt") {
    //It is does not match Matt so it puts tyler is in class
    console.log("TYLER is in class");
}
else {
console.log("MATT is in class");
}

// So if we do === "Matt" then MATT is in class will show up
// if we do !=="Matt" then TYLER is in class will show up