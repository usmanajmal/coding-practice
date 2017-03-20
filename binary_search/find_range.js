/**
 * Find range of a given target
 * @param {number} num Target number
 * @param {array} array Array of intergers arranged in ascending order
 * @return {array} Range of given target
 */
let find_range = function (num, array) {
    let range = [-1, -1], floor = 0, ceiling = array.length - 1, mid;

    // Find starting point of the range
    let startRange = num - 0.1, endRange = num + 0.1;
    while (floor < ceiling) {
        mid = floor + (ceiling - floor) / 2 | 0;

        if (startRange > array[mid]) {
            floor = mid + 1;
        }
        else if (startRange < array[mid]) {
            ceiling = mid;
        }
    }

    range[0] = (array[mid] === num) ? mid : -1;

    // Find ending point of the range
    floor = 0, ceiling = array.length - 1;
    while (floor < ceiling) {
        mid = floor + (ceiling - floor) / 2 | 0;

        if (endRange > array[mid]) {
            floor = mid + 1;
        }
        else if (endRange < array[mid]) {
            ceiling = mid;
        }
    }
    
    range[1] = (array[mid] === num) ? mid : -1;

    return range;
}

// Test 1: Find range in an array
console.log(find_range(5, [2,2,3,3,5,5,6]));        // [4,5]    :   PASS 
// Test 2: Find a non-existent range in an array
console.log(find_range(0, [2,2,3,3,5,5,6]));        // [-1,-1]  :   PASS
// Test 3: Test for zero 
console.log(find_range(0, [0,2,3,3,5,5,6]));        // [0,0]    :   PASS
// Test 4: Find range in an empty array
console.log(find_range(5, []));                     // [-1,-1]  :   PASS