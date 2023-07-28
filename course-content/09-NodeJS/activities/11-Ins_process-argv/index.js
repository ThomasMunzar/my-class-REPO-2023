// returns an array of command line arguments
console.log(process.argv);
// [
//     '/usr/local/bin/node',
//     '/Users/jeromechenette/Desktop/today/02/11-Ins_process-argv/index.js',
//     'farley'
// ]

// arguments passed from the command line are accessed by index
console.log(process.argv[2]);


// NODE DOCS

//process.argv -- always shows bath of NODE and path of FILE anything after that is a command line input like "farley"
// rudamentart way to get user input.