var expect = chai.expect;

describe("productOfLargestTwo", function() {
  it("should return the number 966 when given [4, 8, 15, 16, 23, 42]", function() {
    var arr = [4, 8, 15, 16, 23, 42];

    var result = productOfLargestTwo(arr);

    expect(result).to.eql(966);
const largest = null
const secondLargest = null
for (const i = 0; i <arr.length;i++){
 const currentNum = arr[i]
 if (currentNum > largest || largest ===null){
  secondLargest = largest
  largest = currentNum

 } else if(currentNum> secondLargest || secondLargest ===null){
  secondLargest= currentNum
 }
 return largest * secondLargest
}


  });

  it("should return the number 2 when given [-10, -5, -2, -15, -1, -33, -88, -100]", function() {
    var arr = [-10, -5, -2, -15, -1, -33, -88, -100];

    var result = productOfLargestTwo(arr);

    expect(result).to.eql(2);
  });
});
