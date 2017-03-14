/**
 * Sort given array using Merge Sort algorithm
 * @param {array} array Array to be sorted
 * @return {array} Sorted array
 */
var mergeSort = function (array) {
    let len = array.length, mid, left, right;

    if (len < 2) {
        return array;
    }

    // Divde given list into two halve and sort them separately in a recursive fashion
    mid = Math.floor(len/2),
    left = mergeSort(array.slice(0, mid)),
    right = mergeSort(array.slice(mid));

    return merge(left, right);
};

/**
 * Merge two sorted arrays
 * @param {array} first First array
 * @param {array} second Second array
 * @return {array} Merged sorted array
 */
var merge = function(first, second) {
    let sortedArray = [];

    // Keep comparing and pushing elements into final array untill one of the array list
    // exhausted.
    while (first.length && second.length) {
        sortedArray.push(first[0] < second[0] ? first.shift(): second.shift());
    }

    // Return after concatenating left over array to the result
    return (first.length === 0 ? sortedArray.concat(second) : sortedArray.concat(first));
};

// Test 1
console.log(mergeSort([]));
// Test 2
console.log(mergeSort([0]));
// Test 3
console.log(mergeSort([-2]));
// Test 4
console.log(mergeSort([2]));
// Test 5
console.log(mergeSort([4,1]));
// Test 6: Sort a non-sorted array
console.log(mergeSort([34,2,4,6,3,-35,6,4,32,5]));
// Test 7: Sort a sorted array
console.log(mergeSort([-35,2,3,4,4,5,6,6,32,34]));

