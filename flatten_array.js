/**
 * An array containing arrays when passed to this function it
 * will flat it out
 * @param {array} array Array of elements
 * @return {array} Flattened array
 */
let getFlatten = function (array) {
    let flattenArray = [], i, arrayLength = array.length;

    for (i = 0; i < arrayLength; i++) {
        if (Array.isArray(array[i])) {
            flattenArray = flattenArray.concat(getFlatten(array[i]));
        }
        else {
            flattenArray.push(array[i]);
        }
    }

    return flattenArray;
};

/**
 * An array containing arrays when passed to this function it
 * will flat it out
 * @param {array} array Array of elements
 * @param {array=} flattenArray Optional parameter for reusing same array
 * @return {array} Flattened array
 */
let getFlattenV2 = function (array, flattenArray) {
    let i, arrayLength = array.length;

    flattenArray = flattenArray || [];

    for (i = 0; i < arrayLength; i++) {
        if (Array.isArray(array[i])) {
            getFlattenV2(array[i], flattenArray);
        }
        else {
            flattenArray.push(array[i]);
        }
    }

    return flattenArray;
};

/**
 * An array containing arrays when passed to this function it
 * will flat it out
 * @param {array} array Array of elements
 * @return {array} Flattened array
 */
let getFlattenV3 = function(array) {
    return array.toString().split(",").map(Number);
};

/**
 * Flatten an array using reduce
 * @param {array} array Array to be flattened
 * @return {array} Flattened array
 */
let getFlattenV4 = function(array) {
    // Reduce arguments:
    //  -> Callback
    //      - Accumulator               :   Accumulated value so far (returned by last invocation of callback or initialValue if provided)
    //      - currentValue              :   Current element of array being processed
    //      - currentIndex (OPTIONAL)   :   Index of current element being processed in Array
    //      - array (OPTIONAL)          :   Array the reduce was call upon
    //  -> initialValue (OPTIONAL)  
    return array.reduce(function(accumulator, currentValue) {
        return accumulator.concat(Array.isArray(currentValue) ? getFlattenV4(currentValue) : currentValue);
    }, []);
};

/**
 * Flatten an array using ES6
 * @param {array} array Array to be flattened
 * @return {array} Flattened array
 */
let getFlattenV5 = function(array) {
    // Return if current element is not an array, then return it.
    // Otherwise, flatten each element of the array using Array.map. Spread all
    // those arrays out. Finally, concatenated them all using Array.concat.
    return Array.isArray(array) ? [].concat(...array.map(getFlattenV5)) : array;
};


// Test 1:
// Input: [1,[2],[3,4],[5,[6],7], [[8, [9], 10],11, 12]]
//        [1, 2, 
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.time('getFlatten');
console.log(getFlatten([1,[2],[3,4],[5,[6],7], [[8, [9], 10],11, 12]]));
console.timeEnd('getFlatten');

console.time('getFlattenV2');
console.log(getFlattenV2([1,[2],[3,4],[5,[6],7], [[8, [9], 10],11, 12]]));
console.timeEnd('getFlattenV2');

console.time('getFlattenV3')
console.log(getFlattenV3([1,[2],[3,4],[5,[6],7], [[8, [9], 10],11, 12]]));
console.timeEnd('getFlattenV3');

console.time('getFlattenV4')
console.log(getFlattenV4([1,[2],[3,4],[5,[6],7], [[8, [9], 10],11, 12]]));
console.timeEnd('getFlattenV4');

console.time('getFlattenV5')
console.log(getFlattenV5([1,[2],[3,4],[5,[6],7], [[8, [9], 10],11, 12]]));
console.timeEnd('getFlattenV5');
