/**
 * Return highest product of 3 numbers from a given array
 * Example: 
 *  Input: 2, 4, 6, 1, 10, 11, 5, 9
 *  Output: Product of 10, 11 and 9 
 * @param {array} Array of numbers
 * @return {number} Highest product of 3 numbers 
 */ 
function highestProductOfThree(inputArray) {
    let lengthArray = inputArray.length, _mul, outputArray, item;

    /**
     * Private function for returning product of given array
     * @param {array} Array of numbers
     * @return {number} Product of numbers in the given array
     */
    _mul = function(array) {
        return array.reduce(function (a, b) {
            return a * b;
        })
    };

    // Corner cases
    if (lengthArray < 3) {
        return "Length of the given integer array must be greater than 2.";
    }
    else if (lengthArray === 3) {
        return _mul(inputArray);
    }

    // Main algorithm
    outputArray = [inputArray[0], inputArray[1], inputArray[2]];

    for (item = 3; item < lengthArray; item++) {
        let minNumber = Math.min(...outputArray), indexMinNumber;

        if (minNumber < inputArray[item]) {
            indexMinNumber = outputArray.indexOf(minNumber);
            outputArray[indexMinNumber] = inputArray[item];
        }
    }

    return _mul(outputArray);
 }

// Test 1
console.log("Test 1: [2, 4]: %s", highestProductOfThree([2, 3]));

// Test 2
console.log("Test 2: [2, 4, 2]: %s", highestProductOfThree([2, 4, 2]));

// Test 3
console.log("Test 3: [20, 4, 2, 10]: %s", highestProductOfThree([20, 4, 2, 10]));

// Test 4
console.log("Test 3: [-20, 4, 2, -10, 8]: %s", highestProductOfThree([-20, 4, 2, -10, 8]));

// Test 5
console.log("Test 3: [-20, 1, 2, -10, 0, 0]: %s", highestProductOfThree([-20, 1, 2, -10, 0, 0]));

// Code Complexity:
//  - Time: O(n) because we had to loop over whole array once
//  - Space: O(1) because we haven't created any space which takes more than constant space
