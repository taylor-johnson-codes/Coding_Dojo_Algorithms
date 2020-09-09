/* Balance Point:
Write a function that returns whether the given array has a balance point BETWEEN indices, 
where one side’s sum is equal to the other’s. 
EX. [1, 2, 3, 4, 10] => TRUE
EX. [1, 2, 4, 2, 1] => FALSE
*/

function balancePoint(arr) {
    const length = arr.length;

    if (length < 2) {
    return false;
    }

    let left = arr[0];
    let right = 0;

    for (let i = 1; i < length; i++) {
    right += arr[i];
    }

    for (let i = 1; i < length; i++) {
        if (left === right) {
            return true;
        }

        right -= arr[i];
        left += arr[i];
    }
    return false;
}


// -----------------------------------------------------------------------------------------------//

/*  Array: Binary Search (non recursive):
Given a sorted array and a value, return whether the array contains that value.
Do not sequentially iterate the array. Instead, ‘divide and conquer’,
taking advantage of the fact that the array is sorted .
*/


function binarySearch(arr, target) {
let leftIdx = 0;
let rightIdx = arr.length - 1;

while (leftIdx <= rightIdx) {
    let midIdx = Math.floor(rightIdx - leftIdx / 2);

    if (arr[midIdx] === target) {
    return true;
    }

    if (target < arr[midIdx]) {
    rightIdx = midIdx - 1;
    } else {
    leftIdx = midIdx + 1;
    }
}
return false;
}


// -----------------------------------------------------------------------------------------------//

/*  Array: Remove Duplicates:
Given a SORTED array of integers, dedupe the array 
Because array elements are already in order, all duplicate values will be grouped together.
Ok to use a new array
Bonus: do it in O(n) time (no nested loops, new array ok)
EX. [1,1,1,2,2,2,3,3,4,4,4] => [1,2,3,4]
DO ALGO WITH ONE FOR LOOP AND NO OBJECT TO KEEP TRACK OF FREQUENCY
*/

function removeDuplicates(arr) {
if (arr.length <= 1) {
    return arr;
}

const dedupedArr = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== dedupedArr[dedupedArr.length - 1]) {
    dedupedArr.push(arr[i]);
    }
}
return dedupedArr;
}


/*  Array: Mode
Create a function that, given an array of ints, returns the int that occurs most frequently in the array.
What if there are multiple items that occur the same number of time?
- return all of them (in an array)
- what if all items occur the same number of times?
    - return empty array
*/

function findAllModes(arr) {
if (arr.length === 1) {
    return [arr[0]];
}

const modes = [];
const freq = {};
let maxFreq = 0;
let allSameFreq = true;

for (const n of arr) {
    freq.hasOwnProperty(n) ? freq[n]++ : (freq[n] = 1);

    if (freq[n] > maxFreq) {
    maxFreq = freq[n];
    }
}

for (const key in freq) {
    if (freq[key] === maxFreq) {
    // keys are strings, convert back to int
    modes.push(parseInt(key));
    } else {
    allSameFreq = false;
    }
}
// return empty array if allSameFreq, else return modes
return allSameFreq ? [] : modes;
}


// -----------------------------------------------------------------------------------------------//

/*  Missing Value:
You are given an array of length N that contains, in no particular order, integers from 0 to N . One integer value is missing.
Quickly determine and return the missing value. NO SORT ALLOWED.
EX. [3,0,1,2] => False
EX. [4,0,2,1] => True
*/

function missingValue(arr){
var min = arr[0]
var max = arr[0]
var arrSum = 0;
for ( var x = 0; x < arr.length; x++){
    if (arr[x] < min){
    min = arr[x]
    }
    if (arr[x] > max){
    max = arr[x]
    }
    arrSum += arr[x]
}
if( min < 0){
    return false
}
var sum = 0;
for(var i = min; i <= max; i++){
    sum += i
}
console.log(sum)
console.log(arrSum)
console.log("Difference", Math.abs(arrSum - sum))
}


// -----------------------------------------------------------------------------------------------//

/*
Given a sequence of integers as an array, determine whether 
it is possible to obtain a strictly increasing sequence by 
removing no more than one element from the array.
EX. [1, 3, 2, 1] => FALSE
EX. [1, 2, 3, 4, 3, 6] => TRUE

*/

function almostIncreasingSequence(arr){

}