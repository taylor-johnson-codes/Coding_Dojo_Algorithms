///////////////  PART 1 OF 2  ///////////////

// Print Values and Sum
// Print each array value and the sum so far
// The expected output will be: 
// Num 6, Sum 6
// Num 3, Sum 9
// Num 5, Sum 14
// Num 1, Sum 15
// Num 2, Sum 17
// Num 4, Sum 21

var testArr = [6,3,5,1,2,4]
sum = testArr[0]
for (var i=0; i<testArr.length; i++){
    console.log(`Num ${testArr[i]}, Sum ${sum}`)
    sum += testArr[i+1]
}


///////////////  PART 2 OF 2  ///////////////

// Value * Position
// Multiply each value in the array by its array position
// The expected output will be: [0,3,10,3,8,20]

var testArr = [6,3,5,1,2,4]
var newArr = []
for (var i=0; i<testArr.length; i++){
    newArr.push(testArr[i] * i)
}
console.log(newArr)


// alternate without creating a new array:
var testArr = [6,3,5,1,2,4]
for (var i=0; i<testArr.length; i++){
    temp = testArr[i]
    testArr[i] = testArr[i] * i
}
console.log(testArr)