// 1, BASE CASE
// 2. FORWARD PROGRESS (INCREMENT OR DECREMENT)
// 3. RECURSIVE CALL

/*  Recursive Sigma:
Input: integer
Output: sum of integers from 1 to Input integer
EX. 5 => 5 + 4 + 3 + 2 + 1 => 15
*/

function recursiveSigma(n){
    if(n === 1 ){
        return 1
    }
    return n + recursiveSigma(n - 1)
}


// Recursively sum an arr of ints
// [1,2,3] => 6

function sumArr(nums, i = 0) {
    if (i === nums.length) {
    return 0;
    }
    return nums[i] + sumArr(nums, i + 1);
}


// -----------------------------------------------------------------------------------------------//

/* 
    Given an array nested with unknown amount of arrays,
    return the integers all under ONE array
    Array.isArray() will come in useful
    Array.isArray([1,2,3]) returns true
    Array.isArray({'a':1}) returns false
    Array.isArray(1) returns false
    EX. [1,[2,3,[4]],5] => [1,2,3,4,5]
*/

function recFlatten(arr){

}


// -----------------------------------------------------------------------------------------------//

/*  Recursive Binary Search:
Input: SORTED array of ints, int value
Output: bool representing if value is found
Recursively search to find if the value exists, do not loop over every element.
Approach:
Take the middle item and compare it to the given value.
Based on that comparison, narrow your search to a particular section of the array
*/

function binarySearch(arr, target){
    if(arr.length == 1){
        return (arr[0] == target) ? true : false;
    }
    var mid = Math.floor((arr.length) / 2)
    if(target == arr[mid]){
        return true
    }
    if(target < arr[mid]){
        return binarySearch(arr.slice(0, mid), target)
    }
    else{
        return binarySearch(arr.slice(mid, arr.length), target)
    }
}


// -----------------------------------------------------------------------------------------------//

/*  Rising Square:
Given a number return an array filled with the squares of integers up to given number
// EX. 3 => [1,4,9]
// EX. 5 => [1,4,9,16,25]
*/

function risingSqaures(num, arr){

}


// -----------------------------------------------------------------------------------------------//

/* 
Recursively find the lowest common multiple between two numbers
    "A common multiple is a number that is a multiple of two or more integers. 
    The common multiples of 3 and 4 are 0, 12, 24, .... 
    The least common multiple (LCM) of two numbers is the smallest number (not zero) 
    that is a multiple of both."

Try writing two columns of multiples as a starting point:
Starting with 15 and 25 and keep writing their multiples until you find the lowest common one,
then turn this in to a step by step instruction.
15 25
30 50
45 75
60
75
75 is the first common
*/

function rLCM(a, b, am = a, bm = b) {
    if (am === bm) {
    return am;
    }

    if (am < bm) {
    return rLCM(a, b, am + a, bm);
    }

    if (bm < am) {
    return rLCM(a, b, am, bm + b);
    }
}


// -----------------------------------------------------------------------------------------------//

//  String Subset: Given a string, return an array filled with IN-ORDER substrings
// EX. "ABC" => ["ABC", "AB", "A", "BC", "B", "C", ""]

function stringSubset(string, arr){

}