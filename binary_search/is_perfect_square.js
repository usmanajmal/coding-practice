/**
 * Find if given number is a perfect square
 * @param {number} num Given number
 * @return {boolean} True if a perfect square. False, otherwise 
 */
let is_perfect_square = function (num) {
    
    // Corner case
    if (num === 1) {
        return true;
    }

    let floor = 0, ceiling = num, mid, mul;

    while (floor < ceiling) {
        mid = floor + (ceiling - floor) / 2 | 0;
        mul = mid * mid;

        if (mul === num) {
            return true;
        }
        else if (mul > num) {
            ceiling = mid;
        }
        else {
            floor = mid + 1;
        }
    }
    
    return false;
}

// Tests
console.log(is_perfect_square(1));
console.log(is_perfect_square(2));
console.log(is_perfect_square(3));
console.log(is_perfect_square(4));
console.log(is_perfect_square(8));
console.log(is_perfect_square(64));
console.log(is_perfect_square(144));