// TODO: What are we importing?
const fs = require('fs');
//console.log(fs) HUGE FILE
// TODO: Add comments to explain each of the three arguments of appendFile()
// append file will create a new file in this case 'log.txt' and will add the second index of 
// the input (i did random stuff) and adds that to the file WITHOUT over writing

fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  err ? console.error(err) : console.log('Commit logged!')

);

// ERROR will occur is we give wrong path.