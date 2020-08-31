// Return the given array, after setting any negative values to zero.  
// For example resetNegatives( [1,2,-1, -3]) should return [1,2,0,0].

function resetNegatives(arr){
    for(i=0;i<arr.length;i++){
        if(arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr;
}
console.log(resetNegatives( [1,2,-1, -3]));  // prints [1,2,0,0]


// Given an array, move all values forward by one index, dropping the first and leaving a ‘0’ value at the end.  
// For example moveForward( [1,2,3]) should return [2,3,0].

function moveForward(arr){
    for(i=0;i<arr.length;i++){
        arr[i] = arr[i] + 1;
    }
    arr[arr.length - 1] = 0;
    return arr;
}
console.log(moveForward( [1,2,3]));  // prints [2,3,0]


// Given an array, return an array with values in a reversed order.  For example, returnReversed([1,2,3]) should return [3,2,1].




// Create a function that changes a given array to list each original element twice, retaining original order.  
// Have the function return the new array.  For example repeatTwice( [4,”Ulysses”, 42, false] ) should return 
// [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].