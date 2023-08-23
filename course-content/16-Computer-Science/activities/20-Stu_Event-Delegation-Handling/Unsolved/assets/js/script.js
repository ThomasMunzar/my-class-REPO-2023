const buttons = document.getElementsByTagName('button');

const clickHandler = function () {
// TODO: Add a comment describing the purpose of this variable.
// count will always be zero if page refreshed, used as a tracker for 'clicks'
  let count = 0;

  // TODO: Add a comment describing what is happening. 
  // Closure to clickHandler function
  return function () {
  
   // TODO: Add a comment describing how this variable is being scoped. 
   // count++ is in a closure function scope
    count++;
   // TODO: Add a comment describing how we are using the 'count' variable.
   // count is pulled from clickHandler function but this function increments it. "count" is always zero but is incremented with this function.
    this.textContent = `Clicks: ${count}`;
  };
};

// TODO: Add a comment describing the purpose of this loop.
// adding eventListener to each button with a forloop.
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', clickHandler());
}
