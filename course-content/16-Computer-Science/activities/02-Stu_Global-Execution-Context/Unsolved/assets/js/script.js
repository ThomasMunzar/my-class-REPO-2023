// 1) Where is carNoise stored?
//  Stored in the global execution context
const carNoise = 'Honk';
// 2) Where is goFast stored?
// Global Execution Context (GEC)
const goFast = speed => {
  // 4) When is speed assigned a value? Where is this value stored?
  // when executing go fast, speed is given property of 80 then makeNoice is triggered
  // Speed is assigned a value if user confirms pop up
  
  // 5) Where is makeNoise stored?
  // Stored within the goFast function
  const makeNoise = sound => {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  }

  // 6) What happens in the following statement?
  // makeNoise is called with HONK as sound
  makeNoise(carNoise);
}

// 3) What happens in the following statement?
//  Alert pop-up BLOCKS the entire stack UNTIL user takes some sort of action
// will block main call stack
if(confirm("Do you want to go fast?")) {
  goFast(80);
}


// CALL STACK
// makeNoise
// goFast

// first on last off

