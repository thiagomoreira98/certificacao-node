const stream = require('stream');
const fs = require("fs");
const path = require('path');

// READABLE
let readable = fs.createReadStream(path.resolve(__dirname, './readable.txt'));

// readable.on('data', (data) => {
//   console.log(data.toString())
//   readable.pause();
//   setTimeout(() => {
//     readable.resume()
//   }, 2000)
// })

readable.on('readable', () => {
  while(chunck = readable.read()) {
    console.log(chunck.toString())
  }
})