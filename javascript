function reverseString(str) {
  return str.split('').reverse().join('');
}
function countCharacters(str) {
  return str.length;
}
function capitalizeWords(sentence) {
  return sentence
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
function findMax(arr) {
  return Math.max(...arr);
}
function findMin(arr) {
  return Math.min(...arr);
}
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
function filterArray(arr, conditionFn) {
  return arr.filter(conditionFn);
}

// Example usage:
const evens = filterArray([1, 2, 3, 4, 5, 6], num => num % 2 === 0);
function factorial(n) {
  if (n < 0) return undefined;
  return n === 0 ? 1 : n * factorial(n - 1);
}
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
function fibonacciSequence(terms) {
  const sequence = [];
  for (let i = 0; i < terms; i++) {
    if (i === 0) sequence.push(0);
    else if (i === 1) sequence.push(1);
    else sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}
