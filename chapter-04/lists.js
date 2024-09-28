function arrayToList(arr) {
  if (arr.length === 0) return null;

  return {
    value: arr.pop(),
    rest: arrayToList(arr)
  }
}

function listToArray(list) {
  if (list === null) return [];

  let arr = [list.value];
  return arr.concat(listToArray(list.rest));
}

function prepend(element, list) {
  return {
    value: element,
    rest: list
  }
}

function nth(index, list) {
  if (list === null) return undefined;

  if (index === 0) {
    return list.value;
  } else {
    return nth(index - 1, list.rest);
  }
}

let list = arrayToList([1, 2, 3]);
let array = listToArray(list);
let value = nth(1, list);

console.log(list);
console.log(array);
console.log(value);
