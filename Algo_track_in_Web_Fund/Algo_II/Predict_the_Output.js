function a(){
    console.log('hello');
}
console.log('Dojo');

// PREDICT: Dojo will print (function never called)
// ACTUAL: got it!


function a(){
    console.log('hello');
    return 15;
}
x = a();
console.log('x is', x);

// PREDICT: x is hello 15 will print
// ACTUAL: hello x is 15 will print


function a(n){
    console.log('n is', n);
    return n+15;
}
x = a(3);
console.log('x is', x);

// PREDICT: n is 3 x is 18
// ACTUAL: got it!


function a(n){
    console.log('n is', n);
    y = n*2;
    return y;
}
x = a(3) + a(5);
console.log('x is', x);

// PREDICT: n is 3 n is 5 x is 16
// ACTUAL: got it!


function op(a,b){
    c = a+b;
    console.log('c is', c);
    return c;
}
x = op(2,3) + op(3,5);
console.log('x is', x);

// PREDICT: 
// ACTUAL: 


function op(a,b){
    c = a+b;
    console.log('c is', c);
    return c;
}
x = op(2,3) + op(3,op(2,1)) + op(op(2,1),op(2,3));
console.log('x is', x)

// PREDICT: c is 5 c is 3 c is 6 c is 3 c is 5 c is 8 x is 19
// ACTUAL: got it!


var x = 15;
function a(){
    var x = 10;
}
console.log(x);
a();
console.log(x);

// PREDICT: 15 15 (x isn't returned in the function)
// ACTUAL: got it!