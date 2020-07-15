// Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  
// Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].

function biggieSize(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i] > 0){
            arr[i] = "big"
        }
    }
    return arr
}
testArr1 = [-1,3,5,-5]
console.log(biggieSize(testArr1))
testArr2 = [0.1,3,50000]
console.log(biggieSize(testArr2))


// Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, 
// and return the highest value in the array.

function lowHigh(arr){
    var lowest = arr[0]
    var highest = arr[0]
    for(var i=0; i<arr.length; i++){
        if(arr[i] < lowest){
            lowest = arr[i]
        }
        if(arr[i] > highest){
            highest = arr[i]
        }
    }
    console.log(lowest)
    return highest
}
testArr1 = [-1,3,5,-5]
console.log(lowHigh(testArr1))
testArr2 = [1,2,3]
console.log(lowHigh(testArr2))


// Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, 
// and return the first odd value in the array.

function printReturn(arr){
    console.log(arr[arr.length-2])
    for(var i=0; i<arr.length; i++){
        if(arr[i] % 2 != 0)
            return arr[i]
    }
}
testArr1 = [-1,3,5,-5]
console.log(printReturn(testArr1))
testArr2 = [1,2,3]
console.log(printReturn(testArr2))


// Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value 
// in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.

function doubleVision(arr){
    newArr = []
    for(var i=0; i<arr.length; i++){
        newArr.push(arr[i]*2)
    }
    return newArr
}
testArr1 = [-1,3,5,-5]
console.log(doubleVision(testArr1))
testArr2 = [1,2,3]
console.log(doubleVision(testArr2))


// Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  
// Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.

function positives(arr){
    var count = 0
    for(var i=0; i<arr.length; i++){
        if(arr[i] > 0){
            count++
        }
    }
    arr[arr.length-1] = count
    return arr
}
testArr1 = [-1,3,5,-5]
console.log(positives(testArr1))
testArr2 = [0,0.5,4,5]
console.log(positives(testArr2))


// Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  
// Every time the array has three evens in a row, print "Even more so!".

function evensOdds(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i] % 2 != 0){
            if(arr[i+1] % 2 != 0){
                if(arr[i+2] % 2 != 0){
                    console.log("That's odd!")
                }
            }
        }
        if(arr[i] % 2 == 0){
            if(arr[i+1] % 2 == 0){
                if(arr[i+2] % 2 == 0){
                    console.log("Even more so!")
                }
            }
        }
    }
}
testArr1 = [1,1,1,2,2,2,1,3,5,2,4,6]
evensOdds(testArr1)
testArr2 = [1,1,2,1,1,1,2,2,2]
evensOdds(testArr2)

// alternate: 
function evensOdds(arr){
    var even = 0
    var odd = 0
    for(var i=0; i<arr.length; i++){
        if(arr[i] % 2 == 0){
            even++
            odd = 0
            if(even == 3){
                console.log('Even more so!')
                even = 0
            }
        }
        else{
            odd++
            even = 0
            if(odd ==3){
                console.log("That's odd!")
                odd = 0
            }
        }
    }
}
testArr1 = [1,1,1,2,2,2,1,3,5,2,4,6]
evensOdds(testArr1)
testArr2 = [1,1,2,1,1,1,2,2,2]
evensOdds(testArr2)


// Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  
// Afterward, console.log each array value and return arr.

function increment(arr){
    for(var i=1; i<arr.length; i+=2){
        arr[i] += 1
    }
    console.log(arr)
    return arr
}
testArr1 = [1,2,3,4,5]
console.log(increment(testArr1))
testArr2 = [-5.5, -5.4, 0, 0.1, 500]
console.log(increment(testArr2))


// alternate way to log each individual value through each iteration of the loop:
function increment(arr){
    for(var i=0; i<arr.length; i++){
        if(i % 2 != 0){
            arr[i] += 1
        }
        console.log(arr[i])
    }
    return arr
}
testArr1 = [1,2,3,4,5]
console.log(increment(testArr1))
testArr2 = [-5.5, -5.4, 0, 0.1, 500]
console.log(increment(testArr2))


// Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.
// Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  
// For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?

function previousLengths(arr){
    for(var i=arr.length-1; i>0; i--){  // looping backwards through the array
        arr[i] = arr[i-1].length
    }
    return arr
}
testArr1 = ["hello", "dojo", "awesome"]
console.log(previousLengths(testArr1))


// Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. 
// Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.

function addSeven(arr){
    var newArr = []
    for(var i=0; i<arr.length; i++){
        newArr.push(arr[i] + 7)
    }
    return newArr
}
testArr1 = [1,2,3,4,5]
console.log(addSeven(testArr1))
testArr2 = [-5.5, 0, 0.1, 500]
console.log(addSeven(testArr2))


// Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, 
// but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

function reverse(arr){
    var x = 1
    for(var i=0; i<arr.length/2; i++){
        var temp = arr[i]
        arr[i] = arr[arr.length - x]
        arr[arr.length - x] = temp
        x++
    }
    return arr
}
testArr1 = [3,1,6,4,2]
console.log(reverse(testArr1))
testArr2 = [1,2,3,4,5,6,7,8]
console.log(reverse(testArr2))


// alternate way:

function reverse(arr){
    for(var i=0; i<(arr.length-1)/2; i++){
        var temp = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 -i] = temp
    }
    return arr
}
testArr1 = [3,1,6,4,2]
console.log(reverse(testArr1))
testArr2 = [1,2,3,4,5,6,7,8]
console.log(reverse(testArr2))


// Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative 
// (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

// without using * -1:
function negArr(arr){
    var newArr = []
    for(var i=0; i<arr.length; i++){
        newArr.push(-Math.abs(arr[i]))
        // the absolute value of a number is positive so I added the negative sign in front of the function to turn it into a negative number
    }
    return newArr
}
testArr1 = [1,-3,5]
console.log(negArr(testArr1))
testArr2 = [-5.5, 0, 0.1, 500]
console.log(negArr(testArr2))


// with using * -1:
function negArr(arr){
    var newArr = []
    for(var i=0; i<arr.length; i++){
        if(arr[i] > 0){
            arr[i] = arr[i] * -1
        }
        newArr.push(arr[i])
    }
    return newArr
}
testArr1 = [1,-3,5]
console.log(negArr(testArr1))
testArr2 = [-5.5, 0, 0.1, 500]
console.log(negArr(testArr2))


// Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  
// If no array values are "food", then print "I'm hungry" once.

function hungry(arr){
    var x = 0
    for(var i=0; i<arr.length; i++){
        if(arr[i] == 'food'){
            console.log('yummy')
            x++
        }
    }
    if(x==0){
        console.log("I'm hungry")
    }
}
testArr1 = ['food', 'garbage', 'elephant', 'food']
testArr2 = ['zoo', 'paper', 'lamp']
hungry(testArr1)
hungry(testArr2)


// alternate way with boolean:
function hungry(arr){
    var check = false
    for(var i=0; i<arr.length; i++){
        if(arr[i] == 'food'){
            console.log('yummy')
            check = true
        }
    }
    if(!check){
        console.log("I'm hungry")
    }
}
testArr1 = ['food', 'garbage', 'elephant', 'food']
testArr2 = ['zoo', 'paper', 'lamp']
hungry(testArr1)
hungry(testArr2)


// Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  
// Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  
// swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.

function swap(arr){
    // swapping first and last values:
    var temp = arr[0]
    arr[0] = arr[arr.length - 1]
    arr[arr.length - 1] = temp
    
    // swaps third and third to last values only; not sure how to swap every third value in the array if it's a long array
    for(var i=2; i<arr.length/2; i+3){
        temp = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = temp
    }
    return arr
}
var testArr1 = [1,2,3,4,5,6]
console.log(swap(testArr1))  // works
var testArr2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
console.log(swap(testArr2))  // doesn't work


// Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, 
// and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].

function scale(arr, num){
    for(var i=0; i<arr.length; i++){
        arr[i] = arr[i] * num
    }
    return arr
}
var testArr1 = [1,2,3]
x = 3
console.log(scale(testArr1, x))
var testArr2 = [1,5,10,-2]
y = -5
console.log(scale(testArr2, y))