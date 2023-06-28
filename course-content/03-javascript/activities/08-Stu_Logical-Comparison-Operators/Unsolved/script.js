var a = "50";
var b = 50;
var c = 100;
var d = c % b;//d=0
//Modular opperator when dividing the answer will me the REMAINDER AMOUNT
var e = c / 2;//c/2=50

var expression1 = (b === e);
//added console log
//console.log(b===e);
// "===" is the TRUE EQUALITY in type and value

var expression2 = (e > d);

// Use comparison operators so all expressions below log to the console as true
//changes a===b to a==b
console.log(a == b);
//changed b!== e tp b==c
console.log(b == e);
//changed c<b to c>b
console.log(c > b);
//
console.log(d === 0);

// Use logical operators so all expressions below log to the console as true
console.log(expression1 || expression2);
console.log( expression1 || expression2);

// "||" double pipe opporator checks for any amount of truthyness.  If one is false, the first thing that is true in the expression it will show that.

// "&&" If either value is false, even is one is true - it will display FALSE-- NEED BOTH VALUES TO BE TRUE TO GET TRUE RETURN


var weather = "sunny"

if(weather==="sunny"){
    console.log("I will go for a run")
}else{
    console.log("I will make tea")
}

// can continue with else if statements

