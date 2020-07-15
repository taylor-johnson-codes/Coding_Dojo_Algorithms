function greeting(){
    return "Hello";
    console.log("World");
}
var word = greeting();
console.log(word);

//PREDICT: Hello will print. (World won't print because the function terminates after the return statement.)
//ACTUAL: I got it right



function add(num1, num2){
    console.log("Summing Numbers!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    return sum;
    }
var result1 = add(3,5);
var result2 = add(4,7);
console.log(result1);
console.log(result2);

//PREDICT: 
// Summing Numbers! 
// num1 is: 3
// num2 is: 5
// Summing Numbers! 
// num1 is: 4
// num2 is: 7
// 8
// 11
//ACTUAL: I got it right



function highFive(num){
    for(var i=0; i<num; i++){
        if(i == 5){
            console.log("High Five!");
        }
        else{
            console.log(i);
        }
    }
}

//PREDICT: Nothing will print because the function is not called.
//ACTUAL: I got it right