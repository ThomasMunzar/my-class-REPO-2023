console.log(this);
//This refers to the window

function helloThis() {
  console.log('Inside this function, this is ' + this);
}
//"this" is tied to parent variable "child"
//when we use this in a func it reffers to the global func
var child = {
  age: 10,
  ageTenYears: function () {
    console.log(this.age + 10);
  },
};

//"this" is tied to element to the reassigned "initialInvestment"
//this refers to the child object. will console log 20
var investor = {
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      console.log(this.initialInvestment * 1.15);
    },
  },
};
