// A constructor Arithmetic is created.
function Arithmetic() {};

// Constructor Arithmetic is given a sum method that returns two numbers added together.
Arithmetic.prototype.sum = (a, b) => {
  return a + b
};

// Constructor Arithmetic is given a difference method that returns two numbers subtracted.
Arithmetic.prototype.difference = (a, b) => {
  return a - b
};

// Constructor Arithmetic is given a product method that returns two numbers multiplied together.
Arithmetic.prototype.product = (a, b) => {
  return a * b
};

// Constructor Arithmetic is given a quotient method that returns two numbers divided.
Arithmetic.prototype.quotient = (a, b) => {
  return a / b
};

// Constructor Arithmetic is given a modulus method that currently doesn't do anything.
Arithmetic.prototype.modulus = (a, b) => {
  return a % b
  // return 0; This would make test pass but it is NOT correct
};

// Constructor Arithmetic is exported from the file.
module.exports = Arithmetic;
