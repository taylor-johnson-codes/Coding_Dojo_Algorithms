// ITERARIVE VERSION OF FACTORIAL: 

function iterativeFact(num){
    var product = 1  // total starts at 1 because anything multipled by 1 is itself
    for(var i=1;i<=num;i++){
        product *= i
    }
    return product
}
console.log(iterativeFact(3))
console.log(iterativeFact(5))


// RECURSIVE VERSION: 

function recursiveFact(num){
    if(num == 1){  // base case
        return 1
    }
    return num * recursiveFact(num-1)  
    // this is where the function is calling itself inside the function (aka recursion)
    // -1 is decrementing the num towards the base case (assuming input will be positive num)
}
console.log(recursiveFact(3))
console.log(recursiveFact(5))

// full explanation with t-chart on week2/day5 morning algo recording

// SUMMARY OF SETTING UP A RECURSIVE FUNCTION:
// 1) Base case: Start with a base case with a return statement to break the recursion when a solution is reached
// 2) Forward progress: increment or decrement towards the base case
// 3) Recursive call: the function is calling itself within the function


///////////////////////////////////////////////////////////////////////////////////////////////////////////

// ITERARIVE VERSIONS OF FIBONACCI SEQUENCE: 

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


// RECURSIVE VERSION: 

function recursiveFib(num){
    if (num == 0) return 0  // base case 1of2
    if (num == 1) return 1  // base case 2of2
    return recursiveFib(num-1) + recursiveFib(num-2)
    // two recursive calls and decrementing 
}
console.log(recursiveFib(4))
console.log(recursiveFib(7))
console.log(recursiveFib(15))
