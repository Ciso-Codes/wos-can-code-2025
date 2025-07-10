/**
 * insertAt
 * Given an array, index, and additional value, ​insert
 * the value into the array a​t the given index. Do this
 * without using built-in array methods. Return the
 * array. Do this in-place (no temp arrays).
 *
 * You can think of ​pushFront(arr, val)​ as equivalent to
 * insertAt(arr, 0, val)​.
 *
 * @param {Number[]} arr
 * @param {Number} idx
 * @param {Number} val
 * @returns {Number}
 */
function insertAt(arr, idx, val) {
  for (let i = arr.length; i > idx; i--) {
    arr[i] = arr[i - 1];
  }
  arr[idx] = val;
  return arr;
}

const idx = 2;
const val = 6;
const myArr = [1, 2, 3, 4, 5];
console.log(insertAt(myArr, idx, val)); // [1, 2, 6, 3, 4, 5]

/* 
  removeAt
  Given an array and an index into the array, remove and
  return the array value ​at that index. Do this without
  using any built-in array methods except ​pop()​. Do this
  in-place (no temp arrays). Log the array after mutation.

  Think of popFront(arr)​ as equivalent to removeAt(arr, 0).​
*/

/**
 * removeAt
 * Given an array and an index into the array, remove and
 * return the array value ​at that index. Do this without
 * using any built-in array methods except ​pop()​. Do this
 * in-place (no temp arrays). Log the array after mutation.
 *
 * Think of popFront(arr)​ as equivalent to removeAt(arr, 0).​
 *
 * @param {Number[]} arr
 * @param {Number} idx
 * @returns {Number}
 */
function removeAt(arr, idx) {
  if (arr.length === 0) {
    console.log('The array is empty.');
    return;
  }

  const popped = arr[idx];
  for (let i = idx; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr.pop();
  console.log(arr);
  return popped;
}

console.log(removeAt([1, 2, 3, 4, 5], 2)); // [1, 2, 4, 5]
