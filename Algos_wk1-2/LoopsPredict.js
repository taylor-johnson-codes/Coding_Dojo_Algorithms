for(var num = 0; num < 15; num++){
    console.log(num);
}

//PREDICT: 0 thru 14 will print
//ACTUAL: I got it right


for(var i = 1; i < 10; i+=2){
    if(i % 3 == 0){
        console.log(i);
    }
}

// i = 1 -> 3 -> 5 -> 7 -> 9
// console: 3, 9

//PREDICT: 3 and 9 will print
//ACTUAL: I got it right


for(var j = 1; j <= 15; j++){
    if(j % 2 == 0){
        j+=2;
    }
    else if(j % 3 == 0){
        j++;
    }
    console.log(j);
}

// j = 1 -> 2 -> 4 -> 5 -> 6 -> 8 -> 9 -> 10 -> 11 -> 12 -> 14 -> 15 -> 16
// console: 1, 4, 5, 8, 10, 11, 14, 16

//PREDICT: 1, 4, 5, 8, 10, 11, 14, 16 will print
//ACTUAL: I got it right