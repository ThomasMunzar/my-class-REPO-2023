// function Output(s1, s2){
//     var emptyArr= [];
//         for(var i=0;i < s1.length;i++){
//             for(var j=0; j < s2.length; j++){
//                 if (emptyArr.indexOf(s1[i])) === -1{ 

        
//         emptyArr.push(s1[i])
//         }   
//     }
// }
// }


function compressString (string){
var emptyString = "";
var counter = 1;
for (var i = 0; i < string.length; i++){
    if (string[i] == string[i+1]){
        counter++;
    }
    else{
        emptyString += string[i] + counter
        counter = 1
    }
}
return emptyString
}
console.log(compressString('AAAaaaCB')); //should return 'A3a3C1B1'