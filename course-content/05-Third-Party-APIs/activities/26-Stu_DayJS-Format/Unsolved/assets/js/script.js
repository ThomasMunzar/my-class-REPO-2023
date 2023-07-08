// Use Day.js to format the date and assign to the declared variable.

// TODO: 1. What is your graduation date in the following format: Jan 1, 1999?

var specificDate = dayjs('2023-09-14');
$('#1a').text(specificDate.format('MMMM D, YYYY'));




// TODO: 2. What day of the week will 1/1/2027 be? (e.g. Is it "Monday"?)

var specificDay = dayjs('2027-01-01')

$('#2a').text(specificDay.format('dddd'));


// TODO: 3. What is the current time in the format: hours:minutes:seconds

var currentTime = dayjs()
$('#3a').text(currentTime.format('hh:mm:ss'))


// TODO: 4. What is the current Unix timestamp?

var unixTime = dayjs().unix();
$('#4a').text(unixTime);

// TODO: 5. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.
var unixTimeStamp = dayjs.unix(1318781876).format('MMM D, YYYY, hh:mm:ss a')
$('#5a').text(unixTimeStamp)


// TODO: 6. What is the difference in days between May 4, 2027 and today? Hint:
// You can display the difference between two dayjs objects by using the dayjs
// diff method.)

var difDate = dayjs('2027-05-04')
var today = dayjs();
var days = difDate.diff(today, 'day')
$('#6a').text(days);


// dayjs object for May 4, 2027


// dayjs object for today

// number of days between targetDay and today

