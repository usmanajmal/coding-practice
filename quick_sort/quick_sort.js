// 161958, 343892, 308304
// 155340, 337273, 302087
// 162091, 344170, 152827
// 162085 (done), 320722, 150657
//                164123 (done)
//                       152234

var sum = 0;
var quickSort = function (arr, left, right) {
    if (left < right) {

        //const partitionIndex = getPartitionIndexFirst(arr, left, right);
        // const partitionIndex = getPartitionIndexLast(arr, left, right);
        const partitionIndex = getPartitionIndexMid(arr, left, right);
        sum += (right-left);

        quickSort(arr, left, partitionIndex-1);
        quickSort(arr, partitionIndex+1, right);
    }
    return arr;

}

var getPartitionIndexFirst = function (arr, left, right) {
    let pivot = arr[left], // Left most element is pivot
        partitionIndex = left, // Since, left is the pivot
        i;

    for (i = left; i <= right; i++) {
        //sum+=1;
        if (arr[i] < pivot) {
            partitionIndex++;
            [arr[partitionIndex], arr[i]] = [arr[i], arr[partitionIndex]];
        }
    }

    [arr[partitionIndex], arr[left]] = [arr[left], arr[partitionIndex]];

    return partitionIndex;
}

var getPartitionIndexLastStandalone = function (arr, left, right) {
    let pivot = arr[right], // Left most element is pivot
        partitionIndex = left, // Since, left is the pivot
        i;

    for (i = left; i < right; i++) {
        sum+=1;
        if (arr[i] < pivot) {
            [arr[partitionIndex], arr[i]] = [arr[i], arr[partitionIndex]];
            partitionIndex++;
        }
    }

    [arr[partitionIndex], arr[right]] = [arr[right], arr[partitionIndex]];

    return partitionIndex;
}

var getPartitionIndexLast = function (arr, left, right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    return getPartitionIndexFirst(arr, left, right);
}

// var getPartitionIndexMid = function (arr, left, right) {
//     let mid = Math.floor(left + (right - left)/2);
//     [arr[left], arr[mid]] = [arr[mid], arr[left]];
//     return getPartitionIndexFirst(arr, left, right);
// }

var getPartitionIndexMid = function (arr, left, right) {
    let len = right - left + 1, mid;

    if (len % 2 === 0) {
        mid = left + len / 2;
    }
    else {
        mid = Math.floor(left + ((right-left)/2));
    }

    [arr[left], arr[mid]] = [arr[mid], arr[left]];
    return getPartitionIndexFirst(arr, left, right);
}

// Test 1
//console.log(quickSort([5,2,8,7,4], 0, 4));

// Test 2
// Async File Read
var fs = require('fs');
fs.readFile('/Users/uajmal/work/coding-practice/quick_sort/QuickSort.txt', function (err, data) {
    if (err) throw err;
    var array = data.toString().split("\n");
    var testArray = [];
    for (var i = 0; i < array.length; i++) {
    // for (var i = 0; i < 1000; i++) {
        testArray[i] = parseInt(array[i]);
    }
    // quickSort(testArray, 0, 999);
    quickSort(testArray, 0, testArray.length-1);
    console.log(sum, testArray[testArray.length-1]);

});

// // Synchronous File Read
// var fs = require('fs');
// var array = fs.readFileSync('/Users/uajmal/work/coding-practice/count_inversions/IntegerArray.txt').toString().split("\n");
// for (var i = 0; i < array.length; i++) {
//     array[i] = parseInt(array[i]);
// }
// console.log(countInversions(array) === 2407905288 ? "PASS" : "FAIL");
