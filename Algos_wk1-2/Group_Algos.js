// Given an array, reverse the numbers within the array.
// Create a new array and return that array
// Reverse the array in place without creating a new array (you're going to need a TEMP variable)

function reverseArr(arr){
    var newArr = []
    for(var i = arr.length-1; i >=0 ;i--){
        newArr.push(arr[i])
    }
    return newArr
}
console.log(reverseArr([1,2,3,4,5]))

// alternate:
function revArr(arr){
    for(var i = 0; i < Math.floor((arr.length)/2);i++){
        var temp = arr[i]
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = temp
    }
    return arr
}
console.log(revArr([1,2,3,4,5]))


// Given an array and a number, add the number to the front of the array
// DO THIS WITH ONLY PUSH

function pushFront(arr,num){
    arr.push(0)
    for(var i = arr.length-1; i > 0; i--){
        arr[i] = arr[i-1]
    }
    arr[0] = num
    console.log(arr)
}
pushFront([1,2,3,4,5], 10)


// Given an array, remove the first number from array.
// DO THIS WITH ONLY POP

function popFront(arr){
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i+1]
    }
    arr.pop()
    console.log(arr)
}
popFront([1,2,3,4,5])


// Given an array, return a new array filled with every addition combination of all the numbers within the array

function twoNumSum(arr){
    var newArr = []
    for(var i = 0; i < arr.length;i++){
        for(var j = 0; j < arr.length; j++){
            newArr.push(arr[i] + arr[j])
        }
    }
    return newArr
}
console.log(twoNumSum([1,2,3,4,5]))


// ITERATIVE VS RECURSIVE
// 1. BASE CASE (CONDITION THAT STOPS THE RECURSIVE CALLS / FUNCTION)
// 2. FORWARD PROGRESS (INCREMENT / DECREMENT)
// 3. RECURSIVE CALL

// HINT: THERE ARE TWO BASE CASES
// HINT: YOU'RE GOING TO HAVE TWO RECURSIVE CALLS

function recFib(x){
    if(x ===0)return 0
    if(x ===1)return 1
    return recFib(x-1) + recFib(x-2)
}


function fib(num){
    var prevNum = 0
    var currentNum = 1
    var nextNum
    if(num == 0) return 0
    if(num == 1) return 1
    for(var i = 1; i < num; i++){
        nextNum = prevNum + currentNum
        prevNum = currentNum
        currentNum = nextNum
    }
    console.log(nextNum)
}


function recFactorial(num){
    if(num == 1){
        return 1
    }
    return num * recFactorial(num-1)
}
console.log(recFactorial(3))
console.log(recFactorial(4))


function factorial(num){
    var total = 1
    for(var i =1 ; i <= num; i++){
        total = total * i
    }
    return total
}
console.log(factorial(3))
console.log(factorial(4))