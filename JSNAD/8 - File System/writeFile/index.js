const { writeFile, writeFileSync } = require('fs');
const { resolve } = require('path');
const _path = resolve(__dirname, 'write.txt');

// Asynchronous
writeFile(_path, 'writing', {
  encoding: 'utf8'
}, (err) => {
  if(err)
    console.log(err);
});

// Synchronous
// If options is a string, then it specifies the encoding:
writeFileSync(_path, 'writing', 'utf8');