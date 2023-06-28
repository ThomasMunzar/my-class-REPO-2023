// Write Your Code Below



function isEqual(Item1, Item2) { 

if (Item1===Item2){
    console.log("They are equal in type and value");
}else if (Item1==Item2){
    console.log("They are equal in value");
}else {  console.log("The values are not equal")
}
}
// so the funtion goes thru else statements until it find true or else it will display "The values are not equal"
var Name=50
var house="50"
isEqual(Name,house)