// 1. Configure Server
var express = require('express');
const app = express();
const PORT = 3000;
//Expected Output: 
// {
//   jerome: 50,
//   code: 80,
//   org: 58,
//   ricky: 30,
//   com: 90,
//   robert: 60,
//   chicken: 68,
//   sasha: 8
// }

var input = ["50 jerome.code.org", "30 ricky.code.com", "60 robert.chicken.com", "8 sasha.chicken.org"]

function getNumVisits(arr) {
  // 2. ================= YOUR WORK HERE ==================
    var obj ={}
    var domainsAndCount =[]
    for(var i = 0; i < arr.length; i++){
      domainsAndCount.push(arr[i].split(" "))
    }
    



  // ===================================================
}


// At the root route, send the solution as JSON
  //3. ================= YOUR WORK HERE ==================
  






  // ===================================================


// Listener
// ===========================================================

// 1. Create server