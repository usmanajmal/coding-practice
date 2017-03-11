/**
 * Convert an array into a Max-Heap
 * @param {array} array Array containing integers 
 * @return {array} An array converted to Max-Heap data structure
 */
let maxHeapify = function (array) {
    let arrayLength= array.length,
        parent = Math.floor(arrayLength / 2);

    while (parent > -1) {
        array = sinkDown(array, parent);
        parent--;
    }
    return array;
}

/**
 * Sink a node with lower value down the heap in order to bring up
 * the nodes with higher values
 * @param {array} array Array containing heap
 * @param {integer} parent Index of target node
 * @param {integer=} lastArrayItem Optional param for mentioning last
 *      item of the array under-consideration
 * @return {array} Modified array after sinking mentioned item
 */
let sinkDown = function (array, parent, lastArrayItem) {
    // Get left and right child of the target node
    let left = 2 * parent + 1, right = 2 * parent + 2, tmp;

    lastArrayItem = lastArrayItem || array.length;

    // If node at parent index has value less than its left child
    // then swap their values 
    if (array[parent] < array[left] && left < lastArrayItem) {
        tmp = array[left];
        array[left] = array[parent];
        array[parent] = tmp;

        array = sinkDown(array, left, lastArrayItem);
    }

    // If node at parent index has value less than its right child
    // then swap their values 
    if (array[parent] < array[right] && right < lastArrayItem) {
        tmp = array[right];
        array[right] = array[parent];
        array[parent] = tmp;

        array = sinkDown(array, right, lastArrayItem);
    }

    return array;
};

/**
 * Sort a given array using max-heap
 * @param {array} array Array to be sorted
 * @return {array} Sorted array
 */
let heapSort = function (array) {
    let lastArrayItem = array.length - 1, tmp;

    array = maxHeapify(array);

    while (lastArrayItem > 0) {

        tmp = array[lastArrayItem];
        array[lastArrayItem] = array[0];
        array[0] = tmp;

        array = sinkDown(array, 0, lastArrayItem);

        lastArrayItem--;

    }
    return array;
}


// Test 1: Max Heapify an empty array
console.log(maxHeapify([]));

// Test 2: Max Heapify an array with just one item
console.log(maxHeapify([420]));

// Test 3: Max Heapify an array of strings
console.log(maxHeapify(["blah", "meh", "hmm"]));

// Test 4: Max Heapify a randomly ordered array
console.log(maxHeapify([22,7,81,11,5,16,20,50,30,12]));

// Test 5: Max Heapify an acendingly ordered array
console.log(maxHeapify([1,2,3,17,19,36,47,55,100]));

// Test 6: Max Heapify an empty array
console.log(heapSort([]));

// Test 7: Max Heapify an array with just one item
console.log(heapSort([420]));

// Test 8: Max Heapify an array of strings
console.log(heapSort(["blah", "meh", "hmm"]));

// Test 9: Order randomly ordered array in ascending order
console.log(heapSort([22,7,81,11,5,16,20,50,30,12]))

// Test 10: Order a decendingly ordered array in ascending order
console.log(heapSort([300,62,45,34,22,11,1,0]));