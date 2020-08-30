// PART 1:

function foo(x,y){
    return 5;
}
console.log(foo(5,5))

// PREDICT: 5
// ACTUAL: got it!


function foo(x,y){
    var z = []
    z.push(x);
    z.push(y);
    z.push(5);
    console.log(z);
    return z;
}
var b = foo(2,2)
console.log(b);
console.log(foo(6,8));

// PREDICT: [2,2,5] [2,2,5] [6,8,5] [6,8,5]
// ACTUAL: got it!


function foo(x){
    var z = [];
    z.push(x);
    z.pop();
    z.push(x);
    z.push(x);
    return z;
}
var y = foo(2);
y.push(5);
console.log(y);

// PREDICT: [2,2,5]
// ACTUAL: got it!


function foo(x){
    if(x[0] <x [1]) {
        return true;
    }
    else {
        return false;
    }
}
var b = foo([2,3,4,5])
console.log(b);

// PREDICT: true
// ACTUAL: got it!


function foo(x){
    for(var i=0; i<x.length; i++){
        if(x[i] > 0){
            x[i] = "Coding"
        }
    }
}
console.log(foo([1,2,3,4]))

// PREDICT: undefined because nothing is returned
// ACTUAL: got it!


function foo(x){
    for(var i=0; i<x.length; i++){
        if(x[i] > 5){
            x[i] = "Coding"
        }
        else if(x[i] < 0){
            x[i] = "Dojo"
        }
    }
}
console.log(foo([5,7,-1,4]))

// PREDICT: undefined because nothing is returned
// ACTUAL: got it!


function foo(x){
    if(x[0] > x[1]) {
        return x[1];
    }
    return 10;
}
var b = foo([5,10])
console.log(b);

// PREDICT: 10
// ACTUAL: got it!


function sum(x){
    var sum = 0;
    for(var i=0; i<x.length; i++){
        sum = sum + x[i];
        console.log(sum);
    }
    return sum;
}

// PREDICT: nothing because the function is not being called
// ACTUAL: got it!


// PART 2:

// Analyze an array’s values and return the average of each respective array.

function printAverage(x){
    var sum = 0;
    for(i=0; i<x.length; i++){
        sum += x[i];
    }
    return sum/x.length;
}
var y = printAverage([1,2,3]);
console.log(y); // should log 2

y = printAverage([5,2,8]);
console.log(y); // should log 5


// Create an array with all the odd integers between 1 and 255 (inclusive)

function returnOddArray(){
    oddArray = [];
    for (i=1; i<=255; i+=2){
        oddArray.push(i);
    }
    return oddArray;
}
var y = returnOddArray();
console.log(y); // should log [1,3,5,...,253,255]


// Square each value in a given array, returning that same array with changed values.

function squareValue(x){
    for(i=0; i<x.length; i++){
        x[i] = x[i] * x[i];
    }
    return x;
}
var y = squareValue([1,2,3]);
console.log(y); // should log [1,4,9]

y = squareValue([2,5,8]);
console.log(y); // should log [4,25,64]