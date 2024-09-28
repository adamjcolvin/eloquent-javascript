class Group {
  constructor() {
    this.items = [];
  }
  add(item) {
    if (this.items.includes(item) == false) {
      this.items.push(item);
    }
  }
  delete(item) {
    if (this.items.includes(item)) {
      let index = this.items.indexOf(item);
      this.items.splice(index, 1);
    }
  }
  has(item) {
    return this.items.includes(item);
  }
  static from(iterable) {
    let group = new Group();
    for (let value of iterable) {
      group.add(value);
    }
    return group;
  }
  [Symbol.iterator]() {
    return new GroupIterator(this.items);
  }
}

class GroupIterator {
  constructor(items) {
    this.index = 0;
    this.items = items;
  }
  next() {
    if (this.index >= this.items.length) {
      return { done: true };
    } else {
      let result = { value: this.items[this.index], done: false };
      this.index++;
      return result;
    }
  }
}

let group = new Group();
group.add("hello");
group.add("1, 2, 3");
group.add("hello");
group.add("testing");
console.log(group);
group.delete("1, 2, 3");
console.log(group);
let newGroup = Group.from([1, 2, 3, 4, 5, 5, 5]);
console.log(newGroup);
for (let value of newGroup) {
  console.log(value);
}
