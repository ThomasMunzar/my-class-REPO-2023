const grades = [56, 78, 99, 85];

// TODO: Complete the 'findAverage' function below.
function findAverage(accumalator, currentValue, index, array) {
   let total = currentValue + accumalator

   return total;
}

// TODO: Pass the 'findAverage' into the reduce method.
let gradeAverage = grades.reduce(findAverage);

console.log(gradeAverage);
