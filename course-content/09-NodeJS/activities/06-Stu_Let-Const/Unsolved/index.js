// TODO: Fix the declarations so that the function works properly.
const addGreetingMessage = (name) => {
  let message = 'How are you?';

  if (name.length > 0) {
    let message = 'Hello ' + name; //INSIDE THE BLOCK
    console.log(message);
  }

  console.log(message); //OUTSIDE THE BLOCK so message variable can change withing a block and then back to normal value outside of block
};

addGreetingMessage('Tammy');

// TODO: Fix the declarations so that the function works properly.
const calloutCounter = () => {
  const callout = 'Outside of the loop';
  let counter = 5;

  while (counter > 0) {
    let callout = 'Inside the loop'; // we are changing let that change value of the const variable IN A DIFFERENT BLOCK so it does not cause error
    console.log(counter, callout); // we could use const instead of let on line 21 BUT that is called shadowing and is BAD PRACTICE. 
    counter--;
  }

  console.log(callout);
};

calloutCounter();

// TODO: Fix the declarations so that the function works properly.
const countMatrix = (matrix) => {
  for (let i = 0; i < matrix.length; i++) { 
    const line = matrix[i];
    for (let i = 0; i < line.length; i++) {
      let element = line[i];
      console.log(element);
    }
  }
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

countMatrix(matrix);
