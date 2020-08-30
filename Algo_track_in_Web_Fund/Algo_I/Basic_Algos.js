for(var i=0; i<5;i++){   
console.log(i);
}
// PREDICT: 0 1 2 3 4 will print
// ACTUAL: got it!


for(var i=0; i<5; i++)
{
i = i + 1;  
console.log(i);
}
// PREDICT: 1 2 3 4 5 will print
// ACTUAL: got it wrong; 1 3 5 will print


for(var i=0; i<5; i++)
{
i = i + 3; 
console.log(i);
}
// PREDICT: 3 4 5 6 7 will print
// ACTUAL: got it wrong; 3 7 will print


function y(num1, num2){
return num1+num2;
}
console.log(y(2,3));
console.log(y(3,5));
// PREDICT: 5 8 will print
// ACTUAL: got it!


function y(num1, num2){
console.log(num1);   
return num1+num2;
}
console.log(y(2,3));
console.log(y(3,5));
// PREDICT: 2 5 3 8 will print
// ACTUAL: got it!


a = 15;
console.log(a);
function y(a){
console.log(a);   
return a;
}
b = y(10);
console.log(b);
// PREDICT: 15 10 10
// ACTUAL: got it!


a = 15;
console.log(a);
function y(a){
console.log(a);   
return a*2;
}
b = y(10);
console.log(b);
// PREDICT: 15 10 20
// ACTUAL: got it!