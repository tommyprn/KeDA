function sortFromLargest(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

const numbers = [1, 2, 4, 3, 5, 3, 2, 1];
sortFromLargest(numbers);

console.log("Answer 1: ", numbers);

function maxSumArray(arr, length) {
  let maxSum = 0;
  let currentSum = 0;

  for (let i = 0; i < length; i++) {
    currentSum += arr[i];
  }

  maxSum = currentSum;

  for (let i = length; i < arr.length; i++) {
    currentSum =
      currentSum - arr[i - length] + arr[i];
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

const input = [100, 200, 300, 400];
const maxSum = maxSumArray(input, 2);
console.log("Answer 2: ", maxSum);

function isEvenNumber(num) {
  return num % 2 === 0;
}

function sumEvenNumbers(obj) {
  let sum = 0;

  function traverse(obj) {
    for (const key in obj) {
      if (
        typeof obj[key] === "object" &&
        obj[key] !== null
      ) {
        traverse(obj[key]);
      } else if (
        typeof obj[key] === "number" &&
        isEvenNumber(obj[key])
      ) {
        sum += obj[key];
      }
    }
  }

  traverse(obj);
  return sum;
}

const nestedObject = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 4 }, ee: "car" },
};

const totalEvenSum = sumEvenNumbers(nestedObject);
console.log(totalEvenSum);
