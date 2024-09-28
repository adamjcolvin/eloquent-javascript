const box = {
  locked: true,
  unlock() {
    this.locked = false;
  },
  lock() {
    this.locked = true;
  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  },
};

function withBoxUnlocked(body) {
  let boxInitiallyUnlocked = !box.locked;
  try {
    box.unlock();
    body();
  } finally {
    if (boxInitiallyUnlocked == false) box.lock();
  }
}

withBoxUnlocked(function () {
  box.content.push("Gold Piece");
});

try {
  withBoxUnlocked(function () {
    throw new Error("Pirates on the Horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised:", e);
}

console.log(`Box is locked? ${box.locked}`);
