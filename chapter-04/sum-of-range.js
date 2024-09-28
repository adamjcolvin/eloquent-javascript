function range(start, end) {
  let arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}

function sum(arr) {
  let result = 0;
  for (let number of arr) {
    result += number;
  }
  return result;
}

console.log(`Range 0 - 10: ${range(0, 10)}`);
console.log(`Sum of 1 to 10 is ${sum(range(1, 10))}`);
