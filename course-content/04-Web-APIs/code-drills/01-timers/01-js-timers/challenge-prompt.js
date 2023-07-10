// Practice with timers


console.log("==================== Question 01 ====================");
// Create a timer that creates an alert that says "Question 1" after 5 seconds

setTimeout(function() {
    alert("Question 1");
},5000);

console.log("==================== Question 02 ====================");
// Create a timer that creates an alert that says "Question 2" after 15 seconds

var questionTwo = setTimeout(function(){
    alert("Question 2")
}, 15000)


// Remove the timer you just made for Question 2

clearTimeout(questionTwo)

console.log("==================== Question 03 ====================");
// Create a timer that creates an alert that says "Question 3 part 1" after 15 seconds

var clearPartOne = setTimeout(function(){
    alert("Question 3 Part-1")
},15000)

// Create a timer that creates an alert that says "Question 3 part 2" after 16 seconds

setTimeout(function(){
    alert("Question 3 Part-2")
},16000)


console.log("==================== Question 04 ====================");
// Remove the timer from Question 3 part 1

clearTimeout(clearPartOne)

console.log("==================== Question 05 ====================");
// Create a timer that plays a sound after 11 seconds and console logs "Question 5 Completed!"


// I DONT HAVE A PATH TO PLAY AUDIO BUT HERE IS WHAT THE CODE WOULD LOOK LIKE

//function playsound(){
    //var audio = new Audio(./path/to/ConstantSourceNode.mp3)

    //audio.play();
//}
//setTimeout(playSound, 5000)

setTimeout(function() {console.log("Question 5 Completed!")}, 1000 * 11);