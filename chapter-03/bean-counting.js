function countBs(s) {
  return countChar(s, "B");
}

function countChar(str, char) {
  let charCount = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] === char) charCount++;
  }
  return charCount;
}

console.log(`Baby Yoda has ${countBs("Baby Yoda")} Bs in it`);
console.log(
  `Amanda Barbara has ${countChar("Amanda Barbara", "a")} 'a's in it.`,
);
