// TODO: Complete the 'counter' function below.
function counter() {

    let count = 0
    return {
      increment: function() { 
        return count++
    }
}

}
const newStudent = counter();
newStudent.increment()
  
  module.exports = counter;

  // was just missing return count++