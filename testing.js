// capitalize.js
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = capitalize;

// capitalize.test.js
const capitalize = require('./capitalize');

test('capitalize first character of string', () => {
  expect(capitalize('hello')).toBe('Hello');
});

// reverseString.js
function reverseString(str) {
  return str.split('').reverse().join('');
}

module.exports = reverseString;

// reverseString.test.js
const reverseString = require('./reverseString');

test('reverse a string', () => {
  expect(reverseString('hello')).toBe('olleh');
});

// calculator.js
const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) throw new Error('Division by zero');
    return a / b;
  },
};

module.exports = calculator;

// calculator.test.js
const calculator = require('./calculator');

test('addition', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('subtraction', () => {
  expect(calculator.subtract(3, 1)).toBe(2);
});

test('multiplication', () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

test('division', () => {
  expect(calculator.divide(6, 2)).toBe(3);
  expect(() => calculator.divide(6, 0)).toThrow('Division by zero');
});

// caesarCipher.js
function caesarCipher(str, shift) {
  return str
    .split('')
    .map(char => {
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + shift) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + shift) % 26) + 97);
      } else {
        return char;
      }
    })
    .join('');
}

module.exports = caesarCipher;

// caesarCipher.test.js
const caesarCipher = require('./caesarCipher');

test('caesar cipher with shift factor 1', () => {
  expect(caesarCipher('Hello, World!', 1)).toBe('Ifmmp, Xpsme!');
});

// analyzeArray.js
function analyzeArray(arr) {
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  const avg = sum / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;
  return { average: avg, min, max, length };
}

module.exports = analyzeArray;

// analyzeArray.test.js
const analyzeArray = require('./analyzeArray');

test('analyze an array', () => {
  const result = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(result).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
