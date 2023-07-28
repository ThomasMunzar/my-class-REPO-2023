# INTERVIEW QUESTIONS

## Common characters between strings

## Instructions
Given two strings S1 and S2, return a string/char array consisting of characters that are common between S1 and S2. It should not have repeated characters.

## Example
Test Case 1: 'aabbaa', 'abc'
Expected Output: 'ab'

Test Case 2:'','abc'
Expected Output: ''

## Optimal Time
O(n)



<!-- I want to look at two strings and combine the similar characters into a new string. -->

<!-- I will create an empty string variable -->

<!-- I will iterate through string1 and string 2 and compare values->

<!--  add unique values into new string var-->
<script>
function Output(s1, s2){
    var emptyArr= [];
        for(var i=0;i < s1.length;i++){
            for(var j=0; j < s2.length; j++){
                if (emptyArr.indexOf(s1[i]))=== -1{ 

        
        emptyArr.push(s1[i])
        }   
    }
}
}

function commonChars(S1, S2) {
  //create an empty array to store the common characters
  let common = [];
  //create a for loop to iterate through S1
  for (let i = 0; i < S1.length; i++) {
    //create a nested for loop to iterate through S2
    for (let j = 0; j < S2.length; j++) {
      //if S1[i] equals S2[j]
      if (common.indexOf(S1[i]) === -1) {
        //push S1[i] into the common array
        common.push(S1[i]);
      }
    }
  }
  //return the common array
  return common;
}





</script>