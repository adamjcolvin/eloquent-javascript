function deepEqual(a, b) {
  if (typeof(a) === 'object' && typeof(b) === 'object') {
    for (let i = 0; i < Object.keys(a).length; i++) {
      let aKey = Object.keys(a)[i];
      let bKey = Object.keys(b)[i];
      let aValue = a[aKey];
      let bValue = b[bKey];
      if (deepEqual(aValue, bValue) == false) return false;
    }
    return true;
  } else {
    return a === b;
  }
}

let object1 = { value: 1, test: "two", anotherTest: { value: 5, testAgain: "Four" } }
let object2 = { value: 1, test: "two", anotherTest: { value: 5, testAgain: "Four" } }

console.log(`Deep Equal: ${deepEqual(object1, object2)}`);
