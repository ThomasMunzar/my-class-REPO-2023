# INTERVIEW QUESTIONS

## Remove Duplicates

## Instructions
Given an array of integers, return an array of non-duplicate / unique elements. 

## Example
Test Case 1: [1,3,3,3,1,5]
Expected Output: [1,3,5]

Test Case 2:[]
Expected Output: []

Test Case 3:[1,1,1,1]
Expected Output:[1]

## Optimal Time
O(n)

<!-- I want to remove repeating integers from the input array.

    I will create an empty array variable for uniqie integers
        
        I will interate through the given array with a FOR loop.
        
        If there is  a unique variable then i will put it in the new array
    Create IF statement that compares the index, if not = to index+1 then push to empty array

    If there is a repeated variable I will remove it from the array -->
<script>
function removeDup (array1){
    var uniqueArray = [];
    for(var i= 0; i< array1.length; i++){
        if (uniqueArray.indexOf(arr[i]) === -1){
            uniqueArray.push(array1[i])

        }
    }
return uniqueArray()
}