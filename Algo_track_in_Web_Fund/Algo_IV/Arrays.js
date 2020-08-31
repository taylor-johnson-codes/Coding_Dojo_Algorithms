// Given an array and a value Y, count and print the number of array values greater than Y.

function GreaterThanY(arr, y){
    count = 0;
    for (i=0; i<arr.length; i++){
        if (arr[i] > y){
            count++;
        }
    }
    return count;
}
console.log(GreaterThanY([1,2,3,4,5], 3));  // prints 2


// Given an array, print the max, min and average values for that array.

function MaxMinAvg(arr){
    max = arr[0];
    min = arr[0];
    sum = 0;
    for(i=0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }
        sum += arr[i];
    }
    console.log(max);
    console.log(min);
    console.log(sum/arr.length);
}
MaxMinAvg([1,2,3,4,5]); // prints 5 1 3


// Given an array of numbers, create a function that returns a new array where negative values were replaced with the string ‘Dojo’.
// For example, replaceNegatives( [1,2,-3,-5,5]) should return [1,2, "Dojo", "Dojo", 5].

function replaceNegatives(arr){
    for(i=0;i<arr.length;i++){
        if(arr[i] < 0){
            arr[i] = "Dojo";
        }
    }
    return arr;
}
console.log(replaceNegatives([1,2,-3,-5,5]));  // prints [1,2,Dojo,Dojo,5]


// Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array).  
// For example, removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].

function removeVals(arr, x, y){
    arr.splice(x,y-1);
    return arr;
}
console.log(removeVals([20,30,40,50,60,70],2,4));  // prints [20,30,70]