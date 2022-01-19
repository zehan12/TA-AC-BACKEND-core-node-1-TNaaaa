console.log("Welcome to Nodejs");
var fs = require('fs');
var os = require('os');

console.log(fs)
// readFile unlink

var freeM = os.freemem();

var cpus = os.cpus().length
console.log(cpus);
//free memory
// uptime
// version




//Buffer Class

//assign value to buffer
let buff1 = Buffer.alloc(12);
console.log(buff1);

// buffer value convert into string;
console.log(buff1.toString());


//Sync
console.log(fs.readFileSync("./index.md").toString())

//Async
console.time("Async");
fs.readFile('./index.md', (err, file) => {
  // handle error or content of the file
  console.log(file.toString());
  console.log(err);
  console.time("Sync");
  console.timeEnd("Async");
})



