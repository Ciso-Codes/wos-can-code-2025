/**
 *
 * @param {number} n
 * @returns {number}
 */
function sumOfSquares(n) {
  let num = Math.abs(n);
  return num
    .toString()
    .split('')
    .reduce((sum, digit) => sum + Math.pow(Number(digit), 2), 0);
}

/**
 * Determines whether a number is happy.
 *
 * A happy number eventually reaches 1 when repeatedly replaced by the
 * sum of the squares of its digits. If it enters a loop, it's unhappy.
 *
 * Time: O(log n)
 * Space: O(log n)
 *
 * @param {number} n - Positive integer
 * @returns {boolean}
 */
function isHappy(n) {
  const seen = new Set();
  while (n != 1) {
    n = sumOfSquares(n);
    if (seen.has(n)) {
      return false;
    }
    seen.add(n);
  }
  return true;
}

/**
 * Determines whether a number is happy using Floyd's cycle detection.
 * @param {number} n - positive integer
 * @returns {boolean}
 */
function isHappyFloyd(n) {
  let tortoise = n;
  let hare = sumOfSquares(n);
  while (hare != 1 && tortoise != hare) {
    tortoise = sumOfSquares(tortoise);
    hare = sumOfSquares(sumOfSquares(hare));
  }
  return hare === 1;
}

export { isHappy, isHappyFloyd };
