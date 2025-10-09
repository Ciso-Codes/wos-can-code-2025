/**
 * Converts an integer to a Roman numeral.
 *
 * Time: O(1)
 * Space: O(1)
 *
 * @param {number} num - Integer between 1 and 3999.
 * @returns {string} Roman numeral string.
 */
function intToRoman(num) {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const symbols = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I',
  ];
  let result = '';
  for (let i = 0; i < values.length; i++) {
    while (num >= values[i]) {
      result += symbols[i];
      num -= values[i];
    }
  }

  return result;
}

export { intToRoman };
