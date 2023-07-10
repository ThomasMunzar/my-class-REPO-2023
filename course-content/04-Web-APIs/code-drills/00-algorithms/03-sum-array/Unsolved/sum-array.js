// Write code to add all the numbers in `arr` and return the total

var sumArray = function(arr) {
    var total = 0;
    for (var i=0; i< arr.length; i++ ){
        total+= arr[i];
    }
    return total;

   
};

sumArray([1,2,3,4,5,6,7,8,9,10])