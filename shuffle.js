/**
 * Shuffle a given array
 * @param {array} array Array to be shuffled
 * @return {array} Suffled array
 */
Array.prototype.shuffle = function () {
    let array = this, arraylength = array.length, randomIndex, temp;

    while (arraylength) {
        randomIndex = Math.floor(Math.random(arraylength) * arraylength--);

        temp = array[arraylength];
        array[arraylength] = array[randomIndex];
        array[randomIndex] = temp;
    }

    return array;
}

// Test 1
console.log([].shuffle());
// Test 2
console.log([0].shuffle());
// Test 3
console.log([1].shuffle());
// Test 4
console.log([1,2].shuffle());
// Test 5
console.log([1,2,3].shuffle());
// Test 6
console.log([1,2,3,4,5,6,7,8,9,10,-1].shuffle());