class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  let rand = Math.random();
  if (rand < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Not this time");
  }
}

function calculateResult(a, b) {
  let result = null;
  try {
    return primitiveMultiply(a, b);
  } catch {
    return calculateResult(a, b);
  }
}

console.log(calculateResult(4, 5));
