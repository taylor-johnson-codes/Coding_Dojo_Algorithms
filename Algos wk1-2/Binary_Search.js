function binarySearch(arr, target){
    for (var i = 0; i < arr.length; i++) {
        var start = 0
        var end = arr.length - 1
        var middle = (start+end)/2
        if(arr[start] > target || arr[end] < target){  // under these conditions, the target doesn't exist inside the array
            return false
        }
        else if(arr[start] || arr[end] || arr[middle] == target){  // I added this part; if start/end/middle is the target, you don't need to do a search
            return true
        }  
        while(start <= end){  // because in a sorted array the start point on the L needs to be smaller or equal to the end point on the R
            if(arr[middle] == target){
                return true
            }
            else if(target > arr[middle]) {
                start = middle + 1  // because you know target is on the R side of middle so start at the next index to the R of middle
            }
            else{
                end = mid - 1  // because you know the target is on the L side of middle so end at the index to the L of middle
            }
        }  
    }
    return false  // because target is not found inside the array
}
console.log(binarySearch([1,2,3,4,5,6], 5))  // prints True
console.log(binarySearch([1,2,3,4,5,6], 9))  // prints False


// alternate:
function binarySearch(arr, target){
    var leftIndex = 0
    var rightIndex = arr.length-1
    while(leftIndex <= rightIndex){
        var midIndex = Math.floor((rightIndex + leftIndex) / 2)
        if(target == arr[midIndex]){
            console.log("FOUND IT")
            return true
        }
        if(target < arr[midIndex]){
            rightIndex = midIndex - 1
        }
        else{
            leftIndex = midIndex + 1
        }
    }
    console.log("NOT FOUND")
    return false
}
binarySearch([1,2,3,4,5,6,7,8,9,10], 11)  // prints NOT FOUND