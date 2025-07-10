/*
  Callback function is a function that is
  passed in as an argument to another function
*/

/**
 * A higher-order function is a function that
 * accepts a function as a parameter.
 *
 * @param {Number[]} arr
 * @param {function} callback
 * @returns {Number[]}
 */
function filtered(arr, callback) {
  const filteredArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i]) === true) {
      filteredArray.push(arr[i]);
    }
  }

  return filteredArray;
}

// callback function
function odds(value) {
  return value % 2 !== 0;
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddsResult = filtered(nums, odds);
console.table({ oddsResult });

// callback function
function evens(value) {
  return value % 2 === 0;
}

const evensResult = filtered(nums, evens);
console.table({ evensResult });

// callback
function threes(value) {
  return value % 3 === 0;
}

const threesResult = filtered(nums, threes);
console.table({ threesResult });

// map and filter
const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const mapResult = nums2.map((val) => val * 2);
console.log(mapResult);

const filterResult = nums2.filter(odds);
console.log(filterResult);
