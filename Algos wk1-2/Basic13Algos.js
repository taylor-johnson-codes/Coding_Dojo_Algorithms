// #1 Print 1-255
// Print all the integers from 1 to 255. 

function print1To255() {
    for (var i = 1; i <= 255; i++) {
        console.log(i)
    }
}
print1To255()


// #2 Print Odds 1-255
// Print all odd integers from 1 to 255. 

function printOdds1To255() {
    for (var i = 1; i <= 255; i++) {
        if (i % 2 != 0) {
            console.log(i)
        }
    }
}
printOdds1To255()


// #3 Print Ints and Sum 0-255
// Print integers from 0 to 255, and with each integer print the sum so far. 

function printIntsAndSum0To255() {
    var sum = 0
    for (var i = 0; i <= 255; i++) {
        sum += i
        console.log(i)
        console.log(sum)
    }
}
printIntsAndSum0To255()


// #4 Iterate and Print Array
// Iterate through a given array, printing each value. 

function printArrayVals(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
printArrayVals([1,2,3,4,5])


// #5 Find and Print Max
// Given an array, find and print its largest element. 

function printMaxOfArray(arr) {
    var max = arr[0]
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    console.log(max)
}
printMaxOfArray([1,5,10,4,0])


// #6 Get and Print Average
// Analyze an array’s values and print the average. 

function printAverageOfArray(arr) {
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    console.log(sum/arr.length)
}
printAverageOfArray([1,2,3,4,5])


// #7 Array with Odds
// Create an array with all the odd integers between 1 and 255 (inclusive).

function OddsArray1To255(){
    var oddArr = []
    for(var i = 1; i <= 255; i++){
        if(i % 2 != 0)
            oddArr.push(i)
    }
    return oddArr
}
console.log(OddsArray1To255())


// #8 Square the Values
// Square each value in a given array, returning that same array with changed values. 

function squareArrayVals(arr){
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i]
    }
    return arr
}
console.log(squareArrayVals([1,2,3,4,5]))


// #9 Greater than Y
// Given an array and a value Y, count and print the number of array values greater than Y. 

function greaterThanY(arr, y){
    var count = 0
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] > y)
        count++
    }
    console.log(count)
}
greaterThanY([1,2,3,4,5], 2)


// #10 Zero Out Negative Numbers
// Return the given array, after setting any negative values to zero. 

function zeroOut(arr){
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] < 0){
            arr[i] = 0
        }
    }
    return arr
}
console.log(zeroOut([-2,-1,0,1,2]))


// #11 Max, Min, Average
// Given an array, print the max, min and average values for that array.

function MaxMinAvg(arr){
    var max = arr[0]
    var min = arr[0]
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] > max){
            max = arr[i]
        }
        if(arr[i] < min){
            min = arr[i]
        }
        sum += arr[i]
    }
    console.log(max, min, sum/arr.length)
}
MaxMinAvg([1,2,3,4,5])


// #12 Shift Array Values
// Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.

function shiftArrLeft(arr){
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i+1]
    }
    arr[arr.length-1] = 0
    console.log(arr)
}
shiftArrLeft([1,2,3,4,5])


// #13 Swap String For Array Negative Values
// Given an array of numbers, replace any negative values with the string 'Dojo'.

function swapString(arr){
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] < 0){
            arr[i] = "Dojo"
        }
    }
    console.log(arr)
}
swapString([-2,-1,0,1,2])