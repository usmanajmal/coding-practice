/**
 * Find position of a target from an array if its present
 * in the array. If not, then get the position where it
 * would have been if present in the array
 * @param {number} num Target number
 * @param {array} array A sorted array with no duplicates
 */
let find_position = function (num, array) {
    let floor = 0, ceiling = array.length - 1, mid = 0;

    while (floor < ceiling) {
        mid = floor + (ceiling - floor) / 2 | 0;

        if (array[mid] === num) {
            return mid;
        }
        else if (num < array[mid]) {
            ceiling = mid;
        }
        else {
            floor = mid + 1;
        }
    }

    return floor;
}

// Tests
console.log(find_position(3,[1,2,3,5]) === 2);

console.log(find_position(4,[1,2,3,5]) === 3);

console.log(find_position(34,[1,2,3,5]) === 4);

console.log(find_position(0,[1,2,3,5]) === 0);

console.log(find_position(6,[]) === 0);