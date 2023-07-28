// https://nodejs.org/dist/latest-v16.x/docs/api/modules.html#requireid
const badmath = require('./badmath.js');

console.log(badmath.pie);

console.log(badmath.predictable());

// we imported the stuff from badmath.js

// we can create modules and EXPORT and IMPORT them using 'require' and the PATH to the file.
