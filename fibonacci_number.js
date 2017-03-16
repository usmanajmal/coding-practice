/**
 * Find n-th fibonacci number
 * @param {number} num The n-th number
 * @return {number} n-th fibonacci number
 */
function get_nth_fibonacci(num) {
    if ( num === 0 || num === 1) {
        return num;
    }

    let i, prev = 1, prev_prev = 0, sum = 0;
    for (i = 0; i < num - 1; i++) { 
        sum = prev + prev_prev;
        prev_prev = prev;
        prev = sum;
    }

    return sum;
}

// Test 1
console.log(get_nth_fibonacci(0)); // PASS
// Test 2
console.log(get_nth_fibonacci(1)); // PASS
// Test 3
console.log(get_nth_fibonacci(2)); // PASS
// Test 4
console.log(get_nth_fibonacci(3)); // PASS
// Test 5
console.log(get_nth_fibonacci(4)); // PASS
// Test 6
console.log(get_nth_fibonacci(5)); // PASS
// Test 7
console.log(get_nth_fibonacci(6)); // PASS
// Test 8
console.log(get_nth_fibonacci(7)); // PASS
// Test 9
console.log(get_nth_fibonacci(8)); // PASS
// Test 10
console.log(get_nth_fibonacci(9)); // PASS
// Test 11
console.log(get_nth_fibonacci(50)); // PASS
// Test 12
console.log(get_nth_fibonacci(78)); // PASS
// Test 13
console.log(get_nth_fibonacci(79)); // FAILED: 14472334024676220 (Correct Value: 14472334024676221)
// Test 14
console.log(get_nth_fibonacci(80)); // FAILED: 23416728348467684 (Correct Value: 23416728348467685)
// Test 15
console.log(get_nth_fibonacci(100)); // FAILED: 354224848179262000000 (Correct Value: 354224848179261915075)