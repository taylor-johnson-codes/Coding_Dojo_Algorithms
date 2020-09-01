// Return the given array, after setting any negative values to zero.  
// For example resetNegatives( [1,2,-1, -3]) should return [1,2,0,0].

function resetNegatives(arr){
    for(var i=0;i<arr.length;i++){
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
    for(var i=0;i<arr.length;i++){
        arr[i] = arr[i] + 1;
    }
    arr[arr.length - 1] = 0;
    return arr;
}
console.log(moveForward( [1,2,3]));  // prints [2,3,0]


// Given an array, return an array with values in a reversed order.  For example, returnReversed([1,2,3]) should return [3,2,1].

function returnReversed(arr){
    for(var i = 0; i <= Math.floor(arr.length/2); i++){
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}
console.log(returnReversed([1,2,3]));
console.log(returnReversed([10,20,30,40,50]));
console.log([10,20,30,40,50].reverse());


// Create a function that changes a given array to list each original element twice, retaining original order.  
// Have the function return the new array.  For example repeatTwice( [4,”Ulysses”, 42, false] ) should return 
// [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].

function repeatTwice(arr){
    let newArr = [];
    for(i=0;i<arr.length;i++){
        newArr.push(arr[i]);
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(repeatTwice( [4,"Ulysses", 42, false] ));


function repeatWithSplice(arr){
    for(i=0;i<arr.length;i+=2){
        arr.splice(i, 0, arr[i]);
    }
    return arr;
}

console.log(repeatWithSplice( [4,"Ulysses", 42, false] ));

/*
arr.splice(index, 0, item); will insert item into arr at the specified index 
(deleting 0 items first, that is, it's just an insert).
*/