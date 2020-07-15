// Sigma - Implement function sigma(num) that, given a number, returns the sum of all positive integers up to the given number (inclusive).  
// Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).

function sigma(num){
    var sum = 0  // total starts at 0 because anything added to 0 is itself
    for(var i=1;i<=num;i++){
        sum += i
    }
    return sum
}
console.log(sigma(3))
console.log(sigma(5))


// Factorial - Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 
// 1 up to the given number (inclusive).  For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).

function factorial(num){
    var product = 1  // total starts at 1 because anything multipled by 1 is itself
    for(var i=1;i<=num;i++){
        product *= i
    }
    return product
}
console.log(factorial(3))
console.log(factorial(5))


// Fibonacci - Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the sum of the previous two, 
// starting with values 0 and 1.  Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 
// 4 corresponds to the value four later, etc).  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), 
// fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  
// Do this without using recursion first.  If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment.

// 0, 1, 1, 2, 3, 5, 8, 13  -  fib #s (treating this like an array)
// 0, 1, 2, 3, 4, 5, 6, 7  -  corresponding index #s 

// solution in class
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
fib(4)
fib(7)
fib(15)


// solution from www.youtube.com/watch?v=ngS5aZVmqok
function fib(arr, num){
    var num1 = arr[0]
    var num2 = arr[1]
    var nextNum
    var count = 2
    while(count < num){
        nextNum = num1 + num2
        num1 = num2
        num2 = nextNum
        arr.push(nextNum)
        count++
    }
    return arr
}
console.log(fib([0,1], 1))
console.log(fib([0,1], 4))
console.log(fib([0,1], 7))


// Array: Second-to-Last: Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.

function secondLast(arr){
    if(arr.length >= 2){
        return arr[arr.length - 2]
    }
    else{
        return null
    }
}
console.log(secondLast([42, true, 4, "Liam", 7]))
console.log(secondLast([1]))


// Array: Nth-to-Last: Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.

function nLast(arr, num){
    if(arr.length < num){
        return null
    }
    else{
        return arr[arr.length - num]
    }
}
console.log(nLast([5,2,3,6,4,9,7], 3))
console.log(nLast([1], 5))


// Array: Second-Largest: Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.

function secondLargest(arr){
    var firstLg = arr[0]
    var secondLg = arr[0]
        for(var i = 0; i < arr.length; i++){
            if(arr.length < 2){
                return null
        }
            else if(arr[i] > firstLg){
                secondLg = firstLg
                firstLg = arr[i]
            }
            else if(arr[i] > secondLg && arr[i] < firstLg){
                secondLg = arr[i]
            }
        }
    return secondLg
    }
    console.log(secondLargest([1, 9, 5, 4]))
    console.log(secondLargest([2, 10, 15, 4]))
    console.log(secondLargest([1]))


// Double Trouble: Create a function that changes a given array to list each existing element twice, retaining original order.  
// Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].

function doubleT(arr){
    newArr = []
    for(var i=0;i<arr.length;i++){
        newArr.push(arr[i])
        newArr.push(arr[i])
    }
    return newArr
}
console.log(doubleT([4, "Ulysses", 42, false]))
console.log(doubleT([1, 2, 3, 4, 5]))