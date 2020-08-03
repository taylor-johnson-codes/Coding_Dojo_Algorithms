// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

function arr() {
    newArr = []
    for(var i=1; i<=255; i++){
        newArr.push(i)
    }
    return newArr
}
console.log(arr())


// Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.

function sumEvenNums() {
    var sum = 0
    for (var i=1; i<=1000; i++){
        if (i % 2 == 0){
            sum += i
        }
    }
    return sum
}
console.log(sumEvenNums())


// Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

function sumOddNums() {
    var sum = 0
    for (var i=1; i<5000; i++){
        if (i % 2 != 0){
            sum += i
        }
    }
    return sum
}
console.log(sumOddNums())


// Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

function sumOfArr(arr) {
    var sum = 0
    for(var i=0; i<arr.length; i++){
        sum += arr[i]
    }
    return sum
}
var testArr1 = [1,2,5]
var testArr2 = [-5,2,5,12]
console.log(sumOfArr(testArr1))
console.log(sumOfArr(testArr2))


// Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

function maxOfArr(arr) {
    var max = arr[0]
    for (var i=0; i<arr.length; i++){
        if (arr[i] > max)
            max = arr[i]
    }
    return max
}
var testArr1 = [-3,3,5,7]
var testArr2 = [0,100,0.4,9]
console.log(maxOfArr(testArr1))
console.log(maxOfArr(testArr2))


// Find average - Given an array with multiple values, write a function that returns the average of the values in the array. 
// (e.g. for [1,3,5,7,20] average is 7.2)

function avgOfArr(arr) {
    var sum = 0
    for(var i=0; i<arr.length; i++){
        sum += arr[i]
    }
    return sum/arr.length
}
var testArr1 = [1,2,5]
var testArr2 = [-5,2,5,12]
var testArr3 = [1,3,5,7,20]
console.log(avgOfArr(testArr1))
console.log(avgOfArr(testArr2))
console.log(avgOfArr(testArr3))


// Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. 
// (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

function oddArr() {
    var newArr = []
    for (var i=1; i<50; i++){
        if (i % 2 != 0){
            newArr.push(i)
        }
    }
    return newArr
}
console.log(oddArr())


// Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. 
// For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).

function greaterThanY(arr, num) {
    var newArr = []
    for(var i=0; i<arr.length; i++){
        if (arr[i] > y){
            newArr.push(arr[i])
        }
    }
    return newArr.length
}
var testArr1 = [1,3,5,7]
var y = 3
console.log(greaterThanY(testArr1, y))
var testArr2 = [-100,30,5.5,70,25,25.00001]
var y = 25
console.log(greaterThanY(testArr2, y))


// Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. 
// (e.g. [1,5,10,-2] will become [1,25,100,4])

function squaredArr(arr) {
    for(var i=0; i<arr.length; i++){
        arr[i] = arr[i]*arr[i]
    }
    return arr
}
var testArr = [1,5,10,-2]
console.log(squaredArr(testArr))
var testArr2 = [-100,30,5.5,70,25,25.00001]
console.log(squaredArr(testArr2))


// Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. 
// When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

function noNeg(arr) {
    for(var i=0; i<arr.length; i++){
        if(arr[i] < 0)
            arr[i] = 0
    }
    return arr
}

var testArr1 = [1,5,10,-2]
console.log(noNeg(testArr1))
var testArr2 = [-589,-0.01,-10000]
console.log(noNeg(testArr2))


// Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, 
// and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

function maxMinAvg(arr) {
    var newArr = []
    var max = arr[0]
    var min = arr[0]
    var total = 0
    for(var i=0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
        if(arr[i] < min){
            min = arr[i]
        }
        total += arr[i]
    }
    newArr.push(max,min,(total/arr.length))
    return newArr
}    
var testArr1 = [1,5,10,-2]
console.log(maxMinAvg(testArr1))
var testArr2 = [1,2,3]
console.log(maxMinAvg(testArr2))


// Swap Values - Write a function that will swap the first and last values of any given array. 
// The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

function swap(arr){
    var temp = arr[0]
    arr[0] = arr[arr.length - 1]
    arr[arr.length - 1] = temp
    return arr
}
var testArr1 = [1,5,10,-2]
console.log(swap(testArr1))
var testArr2 = [1,2,3]
console.log(swap(testArr2))


// Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. 
// For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

function numToStr(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i] < 0)
            arr[i] = 'Dojo'
    }
    return arr
}
var testArr1 = [-1,-3,2]
console.log(numToStr(testArr1))
var testArr2 = [-10,-200,-3000,10,200,3000]
console.log(numToStr(testArr2))