var countInversions = function (arr) {
    let inversions = 0, len = arr.length;

    if (!len || len < 2) {
        return 0;
    }

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

        // Divide given list into two halves and sort them separately in a recursive fashion
        mid = Math.floor(len / 2),
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
    var merge = function (first, second) {
        let sortedArray = [], fIndex = 0, sIndex = 0; fLen = first.length, sLen = second.length,
            sortedArrayLen = fLen + sLen;

        while (fIndex < fLen || sIndex < sLen) {
            if (fIndex === fLen) {
                sortedArray.push(second[sIndex]);
                sIndex++;
            } else if (sIndex === sLen) {
                sortedArray.push(first[fIndex]);
                fIndex++;
            } else if (first[fIndex] < second[sIndex]) {
                sortedArray.push(first[fIndex]);
                fIndex++;
            } else {
                sortedArray.push(second[sIndex]);
                sIndex++;
                inversions += (fLen - fIndex);
            }
        }
        // Return after concatenating left over array to the result
        // return (first.length === 0 ? sortedArray.concat(second) : sortedArray.concat(first));
        return sortedArray;
    };

    mergeSort(arr);
    // console.log(mergeSort(arr), inversions);
    return inversions;
}

// Test 1
console.log(countInversions([]) === 0 ? "PASS" : "FAIL");
// Test 2
console.log(countInversions([0]) === 0 ? "PASS" : "FAIL");
// Test 3
console.log(countInversions([-2]) === 0 ? "PASS" : "FAIL");
// Test 4
console.log(countInversions([2]) === 0 ? "PASS" : "FAIL");
// Test 5
console.log(countInversions([4, 1]) === 1 ? "PASS" : "FAIL");
// Test 6: Sort a non-sorted array
console.log(countInversions([1, 3, 5, 2, 4, 6]) === 3 ? "PASS" : "FAIL");
// Test 7:
console.log(countInversions([6, 5, 4, 3, 2, 1]) === 15 ? "PASS" : "FAIL");
// Test 8:
console.log(countInversions([1, 3, 5, 2, 4, 6]) === 3 ? "PASS" : "FAIL");
// Test 9:
console.log(countInversions([1, 5, 3, 2, 4]) === 4 ? "PASS" : "FAIL");
// Test 10:
console.log(countInversions([5, 4, 3, 2, 1]) === 10 ? "PASS" : "FAIL");
// Test 11:
console.log(countInversions([1, 6, 3, 2, 4, 5]) === 5 ? "PASS" : "FAIL");
// Test 12:
console.log(countInversions([9, 12, 3, 1, 6, 8, 2, 5, 14, 13, 11, 7, 10, 4, 0]) === 56 ? "PASS" : "FAIL");
// Test 13:
console.log(countInversions([37, 7, 2, 14, 35, 47, 10, 24, 44, 17, 34, 11, 16, 48, 1, 39, 6, 33, 43, 26, 40, 4, 28, 5, 38, 41, 42, 12, 13, 21, 29, 18, 3, 19, 0, 32, 46, 27, 31, 25, 15, 36, 20, 8, 9, 49, 22, 23, 30, 45]) === 590 ? "PASS" : "FAIL");
// Test 14:
console.log(countInversions([4, 80, 70, 23, 9, 60, 68, 27, 66, 78, 12, 40, 52, 53, 44, 8, 49, 28, 18, 46, 21, 39, 51, 7, 87, 99, 69, 62, 84, 6, 79, 67, 14, 98, 83, 0, 96, 5, 82, 10, 26, 48, 3, 2, 15, 92, 11, 55, 63, 97, 43, 45, 81, 42, 95, 20, 25, 74, 24, 72, 91, 35, 86, 19, 75, 58, 71, 47, 76, 59, 64, 93, 17, 50, 56, 94, 90, 89, 32, 37, 34, 65, 1, 73, 41, 36, 57, 77, 30, 22, 13, 29, 38, 16, 88, 61, 31, 85, 33, 54]) === 2372 ? "PASS" : "FAIL");

// Async File Read
var fs = require('fs');
fs.readFile('/Users/uajmal/work/coding-practice/count_inversions/IntegerArray.txt', function (err, data) {
    if (err) throw err;
    var array = data.toString().split("\n");
    for (var i = 0; i < array.length; i++) {
        array[i] = parseInt(array[i]);
    }
    console.log(countInversions(array) === 2407905288 ? "PASS" : "FAIL");
});

// Synchronous File Read
var fs = require('fs');
var array = fs.readFileSync('/Users/uajmal/work/coding-practice/count_inversions/IntegerArray.txt').toString().split("\n");
for (var i = 0; i < array.length; i++) {
    array[i] = parseInt(array[i]);
}
console.log(countInversions(array) === 2407905288 ? "PASS" : "FAIL");