const capitalize = require('./capitalize');
const reverseString = require('./reverse-string');
const calculator = require('./calculator');
const caesarCipher = require('./caesar-cipher');
const analyzeArray = require('./analyze-array');

describe('String functions', () => {
  it('Capitalize', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('')).toBe('');
  });
  
  it('Reverse', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('')).toBe('');
  });
});

describe('Calculator functions', () => {
  it('Add', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  it('Subtract', () => {
  expect(calculator.subtract(2, 1)).toBe(1);
  });

  it('Divide', () => {
  expect(calculator.divide(6, 2)).toBe(3);
  });

  it('Multiply', () => {
  expect(calculator.multiply(2, 3)).toBe(6);
  });
});

it('Caesar Cipher', () => {
  expect(caesarCipher('hello', 1)).toBe('ifmmp');
  expect(caesarCipher('zoomer', 3)).toBe('crrphu');
});

it('Array Analysis', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
  expect(analyzeArray([1, 2, 3, 4, 5, 6])).toEqual({
    average: 3.5,
    min: 1,
    max: 6,
    length: 6
  });
  expect(analyzeArray([1, 2, 3, 4, 5, 6, 7])).toEqual({
    average: 4,
    min: 1,
    max: 7,
    length: 7
  });
});