var a = "50";
var b = 50;
var c = 100;
var d = c % b;//d=0
var e = c / 2;//c/2=50

var expression1 = (b === e);
//added console log
//console.log(b===e);

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


