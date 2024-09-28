function isEven(n) {
  if (n === 0) {
    return true;
  } else if (Math.abs(n) === 1) {
    return false;
  } else {
    return isEven(n - 2);
  }
}

console.log(`50 is even = ${isEven(50)}`);
console.log(`75 is even = ${isEven(75)}`);
console.log(`-1 is even = ${isEven(-1)}`);
