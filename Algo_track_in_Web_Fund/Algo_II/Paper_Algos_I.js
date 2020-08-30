// PART 1:

function multiply(x,y){
    console.log(x);
    console.log(y);
}
var b = multiply(2,3);
console.log(b);

// PREDICT: 2 3 
// ACTUAL: 2 3 undefined


function multiply(x,y){
    return x*y;
}
var b = multiply(2,3);
console.log(b);
console.log(multiply(5,2));

// PREDICT: 6 10
// ACTUAL: got it!


var x = [1,2,3,4,5,10];
for(var i=0; i<5; i++)
{
    i = i + 3; 
    console.log(i);
}

// PREDICT: 3 7 
// ACTUAL: got it!


var x=15;
console.log(x);
function foo(){
    var x=10;
    console.log(x);
}
console.log(x);
foo();
console.log(x);

// PREDICT: 15 15 10 15
// ACTUAL: got it!


for(var i=0; i<15; i+=2){
    console.log(i);
}

// PREDICT: 0 2 4 6 8 10 12 14
// ACTUAL: got it!


for(var i=0; i<3; i++){
    for(var j=0; j<2; j++){
        console.log(i*j);
    }
}

// PREDICT: 0 0 0 1 0 2
// ACTUAL: got it!


function foo(x,y){
    for(var i=0; i<x; i++){
        for(var j=0; j<x; j++){
            console.log(i*j);
        } 
    }
}
var z = foo(3,3);
console.log(z);

// PREDICT: 0 0 0 0 1 2 0 2 4
// ACTUAL: 0 0 0 0 1 2 0 2 4 undefined


function foo(x,y){
    for(var i=0; i<x; i++){
        for(var j=0; j<y; j++){
            console.log(i*j);
        } 
    }
    return x*y;
}
var z = foo(3,5);
console.log(z);

// PREDICT: 0 0 0 0 0 0 1 2 3 4 0 2 4 6 8 15
// ACTUAL: got it!


// PART 2:

// Print 1 to x: Please complete the codes below to have the function print all the integers from 1 to x.  
// If x is negative, have it print/log "negative number' and have the function return false.

function printUpTo(x){
    if (x < 0) {
        console.log("negative number");
        return false;
    }
    else{
        for(var i = 0; i <= x; i++){
            console.log(i);
        }
    }
}
printUpTo(100); // should print all the integers from 1 to 100
var y = printUpTo(-10); // should return false
console.log(y); // should print false


// PrintSum: Please complete the code below to have the function print integers from 0 to 255 and with each integer 
// print the sum so far.  Have the function return the final sum.

function printSum(x){
    var sum = 0;
    for(i=0; i<=x; i++){
        console.log("i is", i);
        sum += i;
        console.log("sum is", sum);
    }
    return sum
}
var y = printSum(255) // should print all the integers from 0 to 255 and with each integer print the sum so far.
console.log(y) // should print 32640


// PrintSumArray: Please complete the code below to have the function return the sum of all the values in a given array.

function printSumArray(x){
    var sum = 0;
    for(var i=0; i<x.length; i++) {
        sum += x[i];
    }
    return sum;
}
console.log( printSumArray([1,2,3]) ); // should log 6


// Create a function that returns the largest element in a given array.  
// For example largestElement( [1,30,5,7] ) should return 30.

function largestElement(arr){
    big = arr[0];
    for(var i=1; i<arr.length; i++) {
        if(arr[i] > big){
            big = arr[i];
        }
    }
    return big;
}
console.log( largestElement( [1,30,5,7] ) ); // returns 30!