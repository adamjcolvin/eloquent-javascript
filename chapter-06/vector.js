class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  plus(vec) {
    return new Vec(this.x + vec.x, this.y + vec.y);
  }
  minus(vec) {
    return new Vec(this.x - vec.x, this.y - vec.y);
  }
  toString() {
    return `{ x: ${this.x}, y: ${this.y} }`;
  }
  get length() {
    Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

let vec1 = new Vec(3, 6);
let vec2 = new Vec(5, 9);
console.log(`${vec1} + ${vec2} = ${vec1.plus(vec2)}`);
