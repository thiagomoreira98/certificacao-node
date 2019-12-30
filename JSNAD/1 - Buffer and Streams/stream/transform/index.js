const stream = require('stream');
const fs = require("fs");
const path = require('path');

// TRANSFORM
/* PIPE */
let readable = fs.createReadStream(path.resolve(__dirname, './readable.txt'));
let _pipe = fs.createWriteStream(path.resolve(__dirname, './pipe.txt'));
readable.pipe(_pipe);
// readable.unpipe(_pipe);

const Transform = stream.Transform;

let upperCase = new Transform({
  transform(chunck, encoding, callback) {
    let chunckUpper = (chunck + '').toUpperCase();
    this.push(chunckUpper);
    callback();
  }
});

let _transform = fs.createWriteStream(path.resolve(__dirname, './transform.txt'));
readable.pipe(upperCase).pipe(_transform);