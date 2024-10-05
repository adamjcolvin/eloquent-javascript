const fs = require("fs");
const { stat } = require("fs").promises;

const args = process.argv;
const regexp = new RegExp(args[2]);
const files = args.slice(3, args.length);

for (let filePath of files) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    } else if (data.match(regexp)) {
      console.log(`${filePath} is a match`);
    }
  });
}
