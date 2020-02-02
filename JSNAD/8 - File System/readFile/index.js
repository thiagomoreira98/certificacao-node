const { readFile, readFileSync } = require('fs');
const { resolve } = require('path');
const _path = resolve(__dirname, 'read.txt');

// Asynchronous
readFile(_path, { encoding: 'utf8' }, (err, data) => {
  if(err) {
    console.log(err);
    return;
  }

  console.log('Asynchronous:', data);
});

// Synchronous
// If options is a string, then it specifies the encoding:
const data = readFileSync(_path, 'utf8');
console.log('Synchronous:', data);