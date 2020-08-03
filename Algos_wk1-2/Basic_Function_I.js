// PREDICTED 15 OUT OF 15 CORRECT

function a(){
    return 35;
}
console.log(a())
// PREDICT: 35
// ACTUAL: 35


function a(){
    return 4;
}
console.log(a()+a());
// PREDICT: 8
// ACTUAL: 8


function a(b){
    return b;
}
console.log(a(2)+a(4));
// PREDICT: 6
// ACTUAL: 6


function a(b){
    console.log(b);
    return b*3;
}
console.log(a(3));
// PREDICT: 3 9
// ACTUAL: 3 9 


function a(b){
    return b*4;
    console.log(b);  // anything after the return statement is ignored
}
console.log(a(10));
// PREDICT: 40
// ACTUAL: 40


function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);  // return statement will be hit so this is ignored
}
console.log(a(15));
// PREDICT: 4
// ACTUAL: 4


function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );
// PREDICT: 10 3 30
// ACTUAL: 10 3 30


function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);  // function is not being called
console.log(4);
// PREDICT: 3 4
// ACTUAL: 3 4


function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();
// PREDICT: 2 5 8 11
// ACTUAL: 2 5 8 11


function a(b,c){
    for(var i=b; i<c; i++) {
        console.log(i);
    }
    return b*c;
}
a(0,10);
console.log(a(0,10));
// PREDICT: 0-9 0-9 0
// ACTUAL: 0-9 0-9 0


function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(j);
        }
    console.log(i);
    }
}
// PREDICT: nothing (function is never called)
// ACTUAL: nothing


function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}
// PREDICT: nothing (function is never called)
// ACTUAL: nothing


var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);  // function is never called
// PREDICT: 10
// ACTUAL: 10


var z = 10;
function a(){
    var z = 15;
    console.log(z);  // the z inside the function only lives inside the function; it's a different variable with the same name
}
a();
console.log(z);
// PREDICT: 15 10
// ACTUAL: 15 10


var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();  // z is going to equal whatever the function returns which is 15
console.log(z);
// PREDICT: 15 15
// ACTUAL: 15 15