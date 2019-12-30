const stream = require('stream');
const fs = require("fs");
const path = require('path');

// WRITABLE
let writable = fs.createWriteStream(path.resolve(__dirname, './writable.txt'));
writable.write('writing\n');
writable.write('writing again\n');
writable.end('end'); // calling write() after you call the end() will raise an error
console.log('number of bytes', writable.writableLength);