function reverseArray(arr) {
  let newArr = [];
  for (let number of arr) {
    newArr.unshift(number);
  }
  return newArr;
}

function reverseArrayInPlace(arr) {
  for (let i = 0; i < arr.length; i++) {
    let x = arr.pop();
    arr.splice(i, 0, x);
  }
  return arr;
}

console.log(`The reverse of [3, 2, 1] is ${reverseArray([3, 2, 1])}`);
console.log(`The reverse in place of [3, 2, 1] is ${reverseArrayInPlace([3, 2, 1])}`);
