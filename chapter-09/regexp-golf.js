console.log("1. car and cat");
let regexp = /ca(r|t)/;
console.log(regexp.test("car"));
console.log(regexp.test("cat"));

console.log("2. pop and prop");
regexp = /pr?op/;
console.log(regexp.test("pop"));
console.log(regexp.test("prop"));

console.log("3. ferret, ferry and ferrari");
regexp = /ferr(et|y|ari)/;
console.log(regexp.test("ferret"));
console.log(regexp.test("ferry"));
console.log(regexp.test("ferrari"));

console.log("4. Any word ending in ious");
regexp = /\w*ious/;
console.log(regexp.test("Tedious"));
console.log(regexp.test("ious"));

console.log("5. whitespace followed by a period, comma, colon, or semicolon");
regexp = /\s(.|,|:|;)/;
console.log(regexp.test(" ."));
console.log(regexp.test(" ,"));
console.log(regexp.test(" :"));
console.log(regexp.test(" ;"));

console.log("6. A word longer than 6 letters");
regexp = /\w{6}/;
console.log(regexp.test("Adam"));
console.log(regexp.test("Joshua"));
console.log(regexp.test("Arabella"));

console.log("7. A word without e or E");
regexp = /^[^eE]+$/;
console.log(regexp.test("Adam"));
console.log(regexp.test("Edith"));
