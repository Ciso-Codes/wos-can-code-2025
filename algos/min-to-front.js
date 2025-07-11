/* 
  Given an array of numbers, move the first occurrence of the minimum value
  to the front of the array in-place.

  You must not use any built-in methods like .splice() or .sort().

  Return the array after the operation is complete.

  Examples:
    [6, 4, 5, 1, 3, 2] => [1, 6, 4, 5, 3, 2]
    [1, 5, 2, 9] => [1, 5, 2, 9]
    [5, 1, 0, 2, 3, 0] => [0, 5, 1, 2, 3, 0]
*/

const nums1 = [6, 4, 5, 1, 3, 2];
const expected1 = [1, 6, 4, 5, 3, 2];

const nums2 = [1, 5, 2, 9];
const expected2 = [1, 5, 2, 9];

const nums3 = [5, 1, 0, 2, 3, 0];
const expected3 = [0, 5, 1, 2, 3, 0];

/**
 * Moves the smallest number in the given array to the front.
 * @param {number[]} nums
 * @returns {number[]} The given arr after the min has been moved to front.
 */
function minToFront(nums) {
  // edge cases

  return nums;
}

// Tests
const result1 = minToFront(nums1);
console.log(result1, 'should equal', expected1);
console.log(nums1, 'should equal', expected1);

const result2 = minToFront(nums2);
console.log(result2, 'should equal', expected2);
console.log(nums2, 'should equal', expected2);

const result3 = minToFront(nums3);
console.log(result3, 'should equal', expected3);
console.log(nums3, 'should equal', expected3);
