let fs = require("fs");

//Sync
console.log(fs.readFileSync("./index.md").toString())

//Async
console.time("Async");
fs.readFile('./index.md', (err, file) => {
  // handle error or content of the file
  console.log(file.toString());
  console.log(err);
  console.timeEnd("Async");
})

let buff1 = Buffer.alloc(10);
console.log(buff1);

buff1.write("Welcome to Buffer");
console.log(buff1);

console.log("Sync");
