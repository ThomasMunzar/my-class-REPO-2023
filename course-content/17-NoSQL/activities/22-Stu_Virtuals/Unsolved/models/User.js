const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    first: String,
    last: String,
    age: Number,
  },
  {
    toJSON: {
      virtuals: true,
      // TODO: Mongoose will not include virtuals by default, so add a `virtuals` property and set it's value to true
    },
    id: false,
  }
);

// TODO: Create a virtual property `fullName` on the userSchema
userSchema
.virtual('fullName')
//GETTER
.get(function () {
  return `${this.first} ${this.last}`;
});
// TODO: Create a getter for the virtual that returns the full name of the user (first + last)
userSchema.virtual('fullName').set(function () {
  return `${this.first} ${this.last}`;
})

//if given full name this is how we split to first and last
.set(function (fullName){
  const first = fullName.split(' ')[0];//Farley
  const last = fullName.split(' ')[1];// Wittles
  this.set({first, last})
})
// TODO: Create a setter for the virtual that sets the value of the first and last name, given just the `fullName`

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
